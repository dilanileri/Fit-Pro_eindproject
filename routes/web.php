<?php

use App\Http\Controllers\Member\MembershipController;
use App\Http\Controllers\Admin\ExerciseController;
use App\Http\Controllers\Admin\TrainingPlanController;
use App\Http\Controllers\Member\TrainingPlanController as MemberTrainingPlanController;
use App\Http\Controllers\Admin\WorkoutController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Member\WorkoutController as MemberWorkoutController;
use App\Http\Controllers\Member\ExerciseController as MemberExerciseController;
use App\Models\TrainingPlan;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', function () {


    /** @var \App\Models\User $user */
    $user = Auth::user();

    if ($user->role === 'admin') {
        return redirect('/admin');
    }

    return redirect('/member');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'exercises' => \App\Models\Exercise::count(),
                'workouts' => \App\Models\Workout::count(),
                'trainingPlans' => \App\Models\TrainingPlan::count(),
                'users' => User::where('role', 'member')->count(),
            ],
        ]);
    })->name('dashboard');

    Route::get('/leden', function () {
        return Inertia::render('Admin/LedenOverzicht/Index', [
            'members' => User::where('role', 'member')
                ->latest()
                ->get(),
        ]);
    })->name('members.index');

    Route::resource('exercises', ExerciseController::class);
    Route::resource('workouts', WorkoutController::class);
    Route::resource('training-plans', TrainingPlanController::class);
});

Route::middleware(['auth'])
    ->prefix('member')
    ->name('member.')
    ->group(function () {
        Route::get('/training-plans', function () {
            return Inertia::render('Member/TrainingPlans/Index', [
                'trainingPlans' => TrainingPlan::latest()->get(),
            ]);
        })->name('training-plans.index');

        Route::get('/', function () {

            /** @var \App\Models\User $user */
            $user = Auth::user();

            $favoritePlans = $user
                ->favoriteTrainingPlans()
                ->latest()
                ->take(3)
                ->get();

            return Inertia::render('Member/Dashboard', [
                'favoritePlans' => $favoritePlans,
            ]);
        })->name('dashboard');

        Route::get('/membership/checkout', [MembershipController::class, 'checkout']);
        Route::post('/membership/checkout', [MembershipController::class, 'store']);
        Route::get('/membership/success', [MembershipController::class, 'success']);
        Route::post('/membership/logout-to-login', [MembershipController::class, 'logoutToLogin']);


        Route::get('/profile', function () {
            return Inertia::render('Member/Profile');
        })->name('profile');

        Route::patch('/profile', function (\Illuminate\Http\Request $request) {
            $validated = $request->validate([
                'age' => ['nullable', 'integer', 'min:1', 'max:100'],
                'height' => ['nullable', 'integer', 'min:100', 'max:230'],
                'weight' => ['nullable', 'numeric', 'min:35', 'max:300'],
                'gender' => ['nullable', 'string', 'max:50'],
                'address' => ['nullable', 'string', 'min:3', 'max:255'],
                'city' => ['nullable', 'string', 'min:3', 'max:255'],
            ]);

            $request->user()->update($validated);

            return redirect()->back();
        })->name('profile.update');


        Route::post('/training-plans/{trainingPlan}/favorite', [MemberTrainingPlanController::class, 'favorite'])
            ->name('training-plans.favorite');

        Route::delete('/training-plans/{trainingPlan}/favorite', [MemberTrainingPlanController::class, 'unfavorite'])
            ->name('training-plans.unfavorite');

        Route::get('/training-plans/{trainingPlan}', [MemberTrainingPlanController::class, 'show'])
            ->name('training-plans.show');

        Route::get('/workouts/{workout}', [MemberWorkoutController::class, 'show'])
            ->name('workouts.show');

        Route::get('/exercises/{exercise}', [MemberExerciseController::class, 'show'])
            ->name('exercises.show');
    });

require __DIR__ . '/auth.php';
