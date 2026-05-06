import AdminLayout from '@/Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Dashboard({ stats }) {
    const { auth } = usePage().props;

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Welkom terug, {auth.user.name}
                </h1>
                <p className="mt-2 text-slate-400">
                    Beheer hier de inhoud van Fit-Pro.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
                    <p className="text-slate-400">Oefeningen</p>
                    <p className="text-3xl font-bold text-green-400">
                        {stats.exercises}
                    </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
                    <p className="text-slate-400">Workouts</p>
                    <p className="text-3xl font-bold text-green-400">
                        {stats.workouts}
                    </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
                    <p className="text-slate-400">Trainingsschema’s</p>
                    <p className="text-3xl font-bold text-green-400">
                        {stats.trainingPlans}
                    </p>
                </div>
            </div>

            <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
                <h2 className="text-xl font-semibold mb-4">Snelle acties</h2>

                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/admin/exercises/create"
                        className="rounded-lg bg-slate-800 px-4 py-2 text-green-400 hover:bg-slate-700"
                    >
                        Nieuwe oefening
                    </Link>

                    <Link
                        href="/admin/workouts/create"
                        className="rounded-lg bg-slate-800 px-4 py-2 text-green-400 hover:bg-slate-700"
                    >
                        Nieuwe workout
                    </Link>

                    <Link
                        href="/admin/training-plans/create"
                        className="rounded-lg bg-slate-800 px-4 py-2 text-green-400 hover:bg-slate-700"
                    >
                        Nieuw trainingsschema
                    </Link>
                </div>
            </div>
        </AdminLayout>
    );
}