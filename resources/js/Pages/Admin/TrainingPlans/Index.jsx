import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ plans }) {
    return (
        <AdminLayout>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Trainingsschema’s</h1>

                <Link
                    href="/admin/training-plans/create"
                    className="bg-green-500 text-slate-950 px-4 py-2 rounded-lg font-semibold"
                >
                    Nieuw schema
                </Link>
            </div>

            <div className="grid gap-4">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                    >
                        <h3 className="text-xl font-bold">{plan.title}</h3>
                        <p className="text-slate-400">Doel: {plan.goal}</p>
                        <p className="text-slate-400">Niveau: {plan.difficulty}</p>
                        <p className="text-slate-400">Duur: {plan.duration_weeks} weken</p>

                        <div className="mt-4 flex gap-3">
                            <Link
                                href={`/admin/training-plans/${plan.id}`}
                                className="text-green-400"
                            >
                                Bekijken
                            </Link>

                            <Link
                                href={`/admin/training-plans/${plan.id}/edit`}
                                className="text-blue-400"
                            >
                                Bewerken
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}