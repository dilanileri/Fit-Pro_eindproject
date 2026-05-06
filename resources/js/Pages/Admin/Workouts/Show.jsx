import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

export default function Show({ workout }) {
    return (
        <AdminLayout>
            <Link
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
                href="/admin/workouts"
            >
                ← Terug naar workouts
            </Link>

            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{workout.title}</h1>

                <p className="text-slate-400">
                    Details van deze workout en de gekoppelde oefeningen.
                </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Workout informatie</h2>

                <div className="space-y-2 text-slate-300">
                    <p>
                        <span className="text-slate-500">Moeilijkheid:</span>{' '}
                        {workout.difficulty}
                    </p>

                    <p>
                        <span className="text-slate-500">Duur:</span>{' '}
                        {workout.duration_minutes} minuten
                    </p>

                    <p>
                        <span className="text-slate-500">Beschrijving:</span>{' '}
                        {workout.description || 'Geen beschrijving toegevoegd.'}
                    </p>
                </div>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
                <h2 className="text-xl font-semibold mb-4">Gekoppelde oefeningen</h2>

                {workout.exercises.length === 0 ? (
                    <p className="text-slate-400">
                        Er zijn nog geen oefeningen gekoppeld aan deze workout.
                    </p>
                ) : (
                    <div className="space-y-4">
                        {workout.exercises.map((exercise) => (
                            <div
                                key={exercise.id}
                                className="rounded-lg bg-slate-950 border border-slate-800 p-4"
                            >
                                <h3 className="font-semibold text-green-400">
                                    {exercise.name}
                                </h3>

                                <p className="text-sm text-slate-400">
                                    Spiergroep: {exercise.muscle_group}
                                </p>

                                {exercise.pivot && (
                                    <p className="mt-2 text-sm text-slate-300">
                                        Sets: {exercise.pivot.sets ?? '-'} | Reps:{' '}
                                        {exercise.pivot.reps ?? '-'} | Rust:{' '}
                                        {exercise.pivot.rest_seconds ?? '-'} sec
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}