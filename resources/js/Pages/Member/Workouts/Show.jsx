import MemberLayout from '@/Layouts/MemberLayout';
import { Link } from '@inertiajs/react';

export default function Show({ workout }) {
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
                    {workout.title}
                </h1>

                <p className="text-slate-400 mb-2">
                    Moeilijkheid: {workout.difficulty}
                </p>

                <p className="text-slate-400 mb-2">
                    Duur: {workout.duration_minutes} minuten
                </p>

                <p className="mt-4">
                    {workout.description}
                </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">
                Oefeningen
            </h2>

            {workout.exercises.length === 0 ? (
                <p className="text-slate-400">
                    Er zijn nog geen oefeningen gekoppeld.
                </p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2">
                    {workout.exercises.map((exercise) => (
                        <Link
                            href={`/member/exercises/${exercise.id}`}
                            key={exercise.id}
                            className="block rounded-xl bg-slate-900 border border-slate-800 p-5 hover:border-green-400 transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                {exercise.name}
                            </h3>

                            <p className="text-slate-400">
                                Spiergroep: {exercise.muscle_group}
                            </p>

                            <p className="text-slate-400">
                                Moeilijkheid: {exercise.difficulty}
                            </p>

                            {exercise.pivot && (
                                <p className="mt-3 text-green-400">
                                    Sets: {exercise.pivot.sets ?? '-'} | Reps: {exercise.pivot.reps ?? '-'} | Rust: {exercise.pivot.rest_seconds ?? '-'} sec
                                </p>
                            )}
                        </Link>
                    ))}
                </div>
            )}
        </MemberLayout>
    );
}