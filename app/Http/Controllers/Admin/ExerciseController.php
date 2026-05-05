<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Exercise;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExerciseController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Exercises/Index', [
            'exercises' => Exercise::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Exercises/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'muscle_group' => 'required|string|max:255',
            'difficulty' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string|max:255',
            'video_url' => 'nullable|string|max:255',
        ]);

        Exercise::create($validated);

        return redirect()->route('admin.exercises.index');
    }

    public function edit(Exercise $exercise)
    {
        return Inertia::render('Admin/Exercises/Edit', [
            'exercise' => $exercise,
        ]);
    }

    public function update(Request $request, Exercise $exercise)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'muscle_group' => 'required|string|max:255',
            'difficulty' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string|max:255',
            'video_url' => 'nullable|string|max:255',
        ]);

        $exercise->update($validated);

        return redirect()->route('admin.exercises.index');
    }

    public function destroy(Exercise $exercise)
    {
        $exercise->delete();

        return redirect()->route('admin.exercises.index');
    }
}
