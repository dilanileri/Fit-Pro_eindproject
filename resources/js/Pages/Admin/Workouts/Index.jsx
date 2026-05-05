import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

export default function Index({ workouts }) {
    return (
        <AdminLayout>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Workouts</h1>

                <Link
                    href="/admin/workouts/create"
                    className="bg-green-500 text-slate-950 px-4 py-2 rounded-lg font-semibold"
                >
                    Nieuwe workout
                </Link>
            </div>

            <div className="grid gap-4">
                {workouts.map((workout) => (
                    <div
                        key={workout.id}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                    >
                        <h3 className="text-xl font-bold">{workout.title}</h3>
                        <p className="text-slate-400">Moeilijkheid: {workout.difficulty}</p>
                        <p className="text-slate-400">Duur: {workout.duration_minutes} minuten</p>
                        <p className="mt-2">Beschrijving: {workout.description}</p>

                        <div className="mt-4 flex gap-3">
                            <Link className="text-green-400" href={`/admin/workouts/${workout.id}`}>
                                Bekijken
                            </Link>
                            <Link className="text-blue-400" href={`/admin/workouts/${workout.id}/edit`}>
                                Bewerken
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}