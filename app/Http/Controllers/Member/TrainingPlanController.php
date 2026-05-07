<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Models\TrainingPlan;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TrainingPlanController extends Controller
{
    public function show(TrainingPlan $trainingPlan)
    {
        $trainingPlan->load('workouts.exercises');

        return Inertia::render('Member/TrainingPlans/Show', [
            'trainingPlan' => $trainingPlan,
            'isFavorite' => $trainingPlan
                ->favoritedByUsers()
                ->where('user_id', Auth::id())->exists(),
        ]);
    }

    public function favorite(TrainingPlan $trainingPlan)
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        $user->favoriteTrainingPlans()
            ->syncWithoutDetaching([$trainingPlan->getKey()]);
        return back();
    }

    public function unfavorite(TrainingPlan $trainingPlan)
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        $user->favoriteTrainingPlans()
            ->detach($trainingPlan->getKey());

        return back();
    }
}
