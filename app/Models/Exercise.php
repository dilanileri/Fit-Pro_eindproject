<?php

namespace App\Models;

use App\Models\Workout;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    public function workouts()
    {
        return $this->belongsToMany(Workout::class)
            ->withPivot('sets', 'reps', 'rest_seconds')
            ->withTimestamps();
    }
}
