<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Exercise;
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
        return Inertia::render('Admin/Workouts/Create', [
            'exercises' => Exercise::orderBy('name')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'difficulty' => 'required|string|max:255',
            'duration_minutes' => 'nullable|integer',
            'exercises' => "array",
            'exercises.*' => 'exists:exercises,id',
        ]);

        $workout = Workout::create($validated);
        $workout->exercises()->sync($request->input('exercises', []));

        return redirect()->route('admin.workouts.index');
    }

    public function edit(Workout $workout)
    {
        return Inertia::render('Admin/Workouts/Edit', [
            'workout' => $workout->load('exercises'),
            'exercises' => Exercise::orderBy('name')->get()
        ]);
    }

    public function show(Workout $workout)
    {
        return Inertia::render('Admin/Workouts/Show', [
            'workout' => $workout->load('exercises'),
        ]);
    }

    public function update(Request $request, Workout $workout)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'difficulty' => 'required|string|max:255',
            'duration_minutes' => 'nullable|integer',
            'exercises' => "array",
            'exercises.*' => 'exists:exercises,id',
        ]);

        $workout->update($validated);
        $workout->exercises()->sync($request->input('exercises', []));

        return redirect()->route('admin.workouts.index');
    }

    public function destroy(Workout $workout)
    {
        $workout->delete();

        return redirect()->route('admin.workouts.index');
    }
}
