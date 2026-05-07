<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Models\Workout;
use Inertia\Inertia;

class WorkoutController extends Controller
{
    public function show(Workout $workout)
    {
        $workout->load('exercises');

        return Inertia::render('Member/Workouts/Show', [
            'workout' => $workout,
        ]);
    }
}
