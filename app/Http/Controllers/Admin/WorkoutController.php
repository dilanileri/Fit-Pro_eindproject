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
            'image' => 'nullable|string|max:255',

            'exercises' => 'array',
            'exercises.*.id' => 'required|exists:exercises,id',
            'exercises.*.sets' => 'nullable|integer|min:1',
            'exercises.*.reps' => 'nullable|integer|min:1',
            'exercises.*.rest_seconds' => 'nullable|integer|min:0',
        ]);

        $workout = Workout::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'difficulty' => $validated['difficulty'],
            'duration_minutes' => $validated['duration_minutes'] ?? null,
            'image' => $validated['image'] ?? null,
        ]);

        $syncData = [];

        foreach ($validated['exercises'] ?? [] as $exercise) {
            $syncData[$exercise['id']] = [
                'sets' => $exercise['sets'] ?? null,
                'reps' => $exercise['reps'] ?? null,
                'rest_seconds' => $exercise['rest_seconds'] ?? null,
            ];
        }

        $workout->exercises()->sync($syncData);

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
            'image' => 'nullable|string|max:255',
            'exercises' => 'array',
            'exercises.*.id' => 'required|exists:exercises,id',
            'exercises.*.sets' => 'nullable|integer|min:1',
            'exercises.*.reps' => 'nullable|integer|min:1',
            'exercises.*.rest_seconds' => 'nullable|integer|min:0',
        ]);
        $workout->update([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'difficulty' => $validated['difficulty'],
            'duration_minutes' => $validated['duration_minutes'] ?? null,
            'image' => $validated['image'] ?? null,

        ]);

        $syncData = [];

        foreach ($validated['exercises'] ?? [] as $exercise) {
            $syncData[$exercise['id']] = [
                'sets' => $exercise['sets'] ?? null,
                'reps' => $exercise['reps'] ?? null,
                'rest_seconds' => $exercise['rest_seconds'] ?? null,
            ];
        }

        $workout->exercises()->sync($syncData);

        return redirect()->route('admin.workouts.index');
    }

    public function destroy(Workout $workout)
    {
        $workout->delete();

        return redirect()->route('admin.workouts.index');
    }
}
