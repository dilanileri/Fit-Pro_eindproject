<?php

namespace App\Models;

use App\Models\TrainingPlan;
use App\Models\Exercise;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    public function trainingPlans()
    {
        return $this->belongsToMany(TrainingPlan::class)
            ->withPivot('week_number', 'day_name')
            ->withTimestamps();
    }

    public function exercises()
    {
        return $this->belongsToMany(Exercise::class)
            ->withPivot('sets', 'reps', 'rest_seconds')
            ->withTimestamps();
    }

    protected $fillable = [
        'title',
        'description',
        'difficulty',
        'duration_minutes',
        'image'
    ];
}
