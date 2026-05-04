<?php

namespace App\Models;

use App\Models\Workout;
use Illuminate\Database\Eloquent\Model;

class TrainingPlan extends Model
{
    public function workouts()
    {
        return $this->belongsToMany(Workout::class)
            ->withPivot('week_number', 'day_name')
            ->withTimestamps();
    }
}
