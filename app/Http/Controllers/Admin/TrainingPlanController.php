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
            'duration_weeks' => 'nullable|integer',
            'workouts' => 'array',
            'workouts.*' => 'exists:workouts,id',
        ]);

        $plan = TrainingPlan::create($validated);

        $plan->workouts()->sync($request->input('workouts', []));

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
            'duration_weeks' => 'nullable|integer',
            'workouts' => 'array',
            'workouts.*' => 'exists:workouts,id',
        ]);

        $trainingPlan->update($validated);

        $trainingPlan->workouts()->sync($request->input('workouts', []));

        return redirect()->route('admin.training-plans.index');
    }

    public function destroy(TrainingPlan $trainingPlan)
    {
        $trainingPlan->delete();

        return redirect()->route('admin.training-plans.index');
    }
}
