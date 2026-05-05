import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Show({ plan }) {
    return (
        <AdminLayout>
            <Link href="/admin/training-plans" className="text-green-400">
                Terug naar schema’s
            </Link>

            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h1 className="text-3xl font-bold">{plan.title}</h1>
                <p className="text-slate-400 mt-2">Doel: {plan.goal}</p>
                <p className="text-slate-400">Niveau: {plan.difficulty}</p>
                <p className="text-slate-400">Duur: {plan.duration_weeks} weken</p>

                <p className="mt-4">{plan.description}</p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Gekoppelde workouts</h2>

            {plan.workouts.length === 0 ? (
                <p className="text-slate-400">Er zijn nog geen workouts gekoppeld.</p>
            ) : (
                <div className="grid gap-4">
                    {plan.workouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                        >
                            <h3 className="text-xl font-bold">{workout.title}</h3>
                            <p className="text-slate-400">
                                Moeilijkheid: {workout.difficulty}
                            </p>
                            <p className="text-slate-400">
                                Duur: {workout.duration_minutes} minuten
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}