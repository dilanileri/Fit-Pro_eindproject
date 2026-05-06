import MemberLayout from '@/Layouts/MemberLayout';
import { Link } from '@inertiajs/react';

export default function Show({ trainingPlan }) {
    return (
        <MemberLayout>
            <Link
                href="/member/training-plans"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar trainingsschema's
            </Link>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 mb-8">
                <h1 className="text-3xl font-bold mb-4">
                    {trainingPlan.title}
                </h1>

                <div className="space-y-2 text-slate-300">
                    <p>
                        <span className="text-slate-500">Doel:</span>{' '}
                        {trainingPlan.goal}
                    </p>

                    <p>
                        <span className="text-slate-500">Niveau:</span>{' '}
                        {trainingPlan.difficulty}
                    </p>

                    <p>
                        <span className="text-slate-500">Duur:</span>{' '}
                        {trainingPlan.duration_weeks} weken
                    </p>

                    <p className="pt-2">
                        {trainingPlan.description}
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">
                Workouts
            </h2>

            {trainingPlan.workouts.length === 0 ? (
                <p className="text-slate-400">
                    Er zijn nog geen workouts gekoppeld.
                </p>
            ) : (
                <div className="space-y-6">
                    {trainingPlan.workouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="rounded-xl bg-slate-900 border border-slate-800 p-6"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                {workout.title}
                            </h3>

                            <p className="text-slate-400 mb-1">
                                Moeilijkheid: {workout.difficulty}
                            </p>

                            <p className="text-slate-400 mb-4">
                                Duur: {workout.duration_minutes} minuten
                            </p>

                            <h4 className="font-semibold mb-3 text-green-400">
                                Oefeningen
                            </h4>

                            {workout.exercises.length === 0 ? (
                                <p className="text-slate-500">
                                    Geen oefeningen gekoppeld.
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {workout.exercises.map((exercise) => (
                                        <div
                                            key={exercise.id}
                                            className="rounded-lg bg-slate-950 border border-slate-800 p-3"
                                        >
                                            <p className="font-semibold">
                                                {exercise.name}
                                            </p>

                                            <p className="text-sm text-slate-400">
                                                {exercise.muscle_group}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </MemberLayout>
    );
}