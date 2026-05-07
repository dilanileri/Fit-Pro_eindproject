import MemberLayout from '@/Layouts/MemberLayout';
import { Link, router } from '@inertiajs/react';

export default function Show({ trainingPlan, isFavorite }) {
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

                {isFavorite ? (
                    <button
                        onClick={() =>
                            router.delete(`/member/training-plans/${trainingPlan.id}/favorite`)
                        }
                        className="mb-4 rounded-lg bg-red-500 px-4 py-2 text-white font-semibold"
                    >
                        Verwijder favoriet
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            router.post(`/member/training-plans/${trainingPlan.id}/favorite`)
                        }
                        className="mb-4 rounded-lg bg-green-500 px-4 py-2 text-slate-950 font-semibold"
                    >
                        Toevoegen favoriet
                    </button>
                )}

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
                    {trainingPlan.workouts.map((workout, index) => (
                        <div
                            key={workout.id}
                            className="rounded-xl bg-slate-900 border border-slate-800 p-6"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                {`Dag ${index + 1}`} - {workout.title}
                            </h3>

                            <p className="text-slate-400 mb-1">
                                Moeilijkheid: {workout.difficulty}
                            </p>

                            <p className="text-slate-400 mb-4">
                                Duur: {workout.duration_minutes} minuten
                            </p>

                            <Link
                                href={`/member/workouts/${workout.id}`}
                                className="inline-block mt-4 rounded-lg bg-green-500 px-4 py-2 text-slate-950 font-semibold"
                            >
                                Bekijk workout
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </MemberLayout>
    );
}