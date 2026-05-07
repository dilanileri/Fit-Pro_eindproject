<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Models\Exercise;
use Inertia\Inertia;
use App\Http\Controllers\Controller;


class ExerciseController extends Controller
{
    public function show(Exercise $exercise)
    {
        return Inertia::render('Member/Exercises/Show', [
            'exercise' => $exercise,
        ]);
    }
}
