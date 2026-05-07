<?php

use App\Http\Controllers\Admin\ExerciseController;
use App\Http\Controllers\Admin\TrainingPlanController;
use App\Http\Controllers\Admin\WorkoutController;
use App\Http\Controllers\ProfileController;
use App\Models\TrainingPlan;
use Illuminate\Foundation\Application;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'exercises' => \App\Models\Exercise::count(),
                'workouts' => \App\Models\Workout::count(),
                'trainingPlans' => \App\Models\TrainingPlan::count(),
            ],
        ]);
    })->name('dashboard');


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
            return Inertia::render('Member/Dashboard');
        })->name('dashboard');

        Route::get('/profile', function () {
            return Inertia::render('Member/Profile');
        })->name('profile');

        Route::patch('/profile', function (\Illuminate\Http\Request $request) {
            $validated = $request->validate([
                'age' => ['nullable', 'integer', 'min:1', 'max:100'],
                'height' => ['nullable', 'integer', 'min:100', 'max:230'],
                'weight' => ['nullable', 'numeric', 'min:35', 'max:300'],
                'address' => ['nullable', 'string', 'min:3', 'max:255'],
                'city' => ['nullable', 'string', 'min:3', 'max:255'],
            ]);

            $request->user()->update($validated);

            return redirect()->back();
        })->name('profile.update');

        Route::get('/training-plans/{trainingPlan}', function (TrainingPlan $trainingPlan) {
            $trainingPlan->load('workouts.exercises');

            return Inertia::render('Member/TrainingPlans/Show', [
                'trainingPlan' => $trainingPlan,
            ]);
        })->name('training-plans.show');
    });

require __DIR__ . '/auth.php';
