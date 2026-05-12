<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TrainingPlan;
use App\Models\Workout;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingPlanController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/TrainingPlans/Index', [
            'plans' => TrainingPlan::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/TrainingPlans/Create', [
            'workouts' => Workout::orderBy('title')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'goal' => 'required|string|max:255',
            'difficulty' => 'required|string|max:255',
            'duration_weeks' => 'nullable|string',
            'workouts' => 'array',
            'workouts.*.id' => 'required|exists:workouts,id',
            'workouts.*.day_name' => 'nullable|string|max:50',
        ]);
        $plan = TrainingPlan::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'goal' => $validated['goal'],
            'difficulty' => $validated['difficulty'],
            'duration_weeks' => $validated['duration_weeks'] ?? null,
        ]);

        $syncData = [];

        foreach ($validated['workouts'] ?? [] as $workout) {
            $syncData[$workout['id']] = [
                'day_name' => $workout['day_name'] ?? null,
            ];
        }

        $plan->workouts()->sync($syncData);

        return redirect()->route('admin.training-plans.index');
    }

    public function show(TrainingPlan $trainingPlan)
    {
        return Inertia::render('Admin/TrainingPlans/Show', [
            'plan' => $trainingPlan->load('workouts'),
        ]);
    }

    public function edit(TrainingPlan $trainingPlan)
    {
        return Inertia::render('Admin/TrainingPlans/Edit', [
            'plan' => $trainingPlan->load('workouts'),
            'workouts' => Workout::orderBy('title')->get(),
        ]);
    }

    public function update(Request $request, TrainingPlan $trainingPlan)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'goal' => 'required|string|max:255',
            'difficulty' => 'required|string|max:255',
            'duration_weeks' => 'nullable|string',

            'workouts' => 'array',
            'workouts.*.id' => 'required|exists:workouts,id',
            'workouts.*.day_name' => 'nullable|string|max:50',
        ]);

        $trainingPlan->update([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'goal' => $validated['goal'],
            'difficulty' => $validated['difficulty'],
            'duration_weeks' => $validated['duration_weeks'] ?? null,
        ]);

        $syncData = [];

        foreach ($validated['workouts'] ?? [] as $workout) {
            $syncData[$workout['id']] = [
                'day_name' => $workout['day_name'] ?? null,
            ];
        }

        $trainingPlan->workouts()->sync($syncData);

        return redirect()->route('admin.training-plans.index');
    }

    public function destroy(TrainingPlan $trainingPlan)
    {
        $trainingPlan->delete();

        return redirect()->route('admin.training-plans.index');
    }
}
