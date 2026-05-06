<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\ExerciseController;
use App\Http\Controllers\Admin\WorkoutController;
use App\Http\Controllers\Admin\TrainingPlanController;
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

require __DIR__ . '/auth.php';
