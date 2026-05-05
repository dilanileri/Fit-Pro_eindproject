<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Workout;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkoutController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Workouts/Index', [
            'workouts' => Workout::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Workouts/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'difficulty' => 'required|string|max:255',
            'duration_minutes' => 'nullable|integer',
        ]);

        Workout::create($validated);

        return redirect()->route('admin.workouts.index');
    }

    public function edit(Workout $workout)
    {
        return Inertia::render('Admin/Workouts/Edit', [
            'workout' => $workout,
        ]);
    }

    public function update(Request $request, Workout $workout)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'difficulty' => 'required|string|max:255',
            'duration_minutes' => 'nullable|integer',
        ]);

        $workout->update($validated);

        return redirect()->route('admin.workouts.index');
    }

    public function destroy(Workout $workout)
    {
        $workout->delete();

        return redirect()->route('admin.workouts.index');
    }
}
