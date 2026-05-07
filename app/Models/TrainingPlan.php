<?php

namespace App\Models;

use App\Models\Workout;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class TrainingPlan extends Model
{
    public function workouts()
    {
        return $this->belongsToMany(Workout::class)
            ->withPivot('week_number', 'day_name')
            ->withTimestamps();
    }
    protected $fillable = [
        'title',
        'description',
        'goal',
        'difficulty',
        'duration_weeks',
    ];
    public function favoritedByUsers()
    {
        return $this->belongsToMany(
            User::class,
            'favorite_training_plans'
        )->withTimestamps();
    }
}
