import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import {
    Activity,
    ArrowRight,
    Clock3,
    Eye,
    Flame,
    Plus,
    Trash2,
} from 'lucide-react';

export default function Index({ workouts }) {
    function deleteWorkout(workout) {
        if (
            !confirm(
                `Ben je zeker dat je "${workout.title}" wilt verwijderen?`
            )
        ) {
            return;
        }

        router.delete(`/admin/workouts/${workout.id}`, {
            preserveScroll: true,
        });
    }

    return (
        <AdminLayout>
            <section className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
                            Beheer
                        </p>

                        <h1 className="mt-2 text-3xl font-black text-white">
                            Workouts
                        </h1>

                        <p className="mt-2 text-sm text-slate-400">
                            Beheer alle workouts en gekoppelde oefeningen binnen
                            Fit-Pro.
                        </p>
                    </div>

                    <Link
                        href="/admin/workouts/create"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-green-400 sm:w-auto"
                    >
                        <Plus className="h-5 w-5" />
                        Nieuwe workout
                    </Link>
                </div>

                {workouts.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">
                        <Activity className="mx-auto mb-4 h-10 w-10 text-slate-500" />

                        <h2 className="text-xl font-bold text-white">
                            Nog geen workouts
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Voeg je eerste workout toe om trainingsschema’s op te
                            bouwen.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-5 lg:grid-cols-2">
                        {workouts.map((workout) => (
                            <article
                                key={workout.id}
                                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:shadow-2xl hover:shadow-black/30"                            >
                                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/5 blur-3xl"></div>

                                <div className="relative z-10 p-5 md:p-6">
                                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h2 className="text-2xl font-black text-white">
                                                {workout.title}
                                            </h2>

                                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                                {workout.description}
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 gap-2">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                                                <Flame className="h-3 w-3" />
                                                {workout.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-6 flex items-center gap-3 rounded-2xl border border-slate-800 bg-black/20 p-4">
                                        <Clock3 className="h-5 w-5 text-sky-400" />

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                Duur
                                            </p>

                                            <p className="font-bold text-white">
                                                {workout.duration_minutes}{' '}
                                                minuten
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        <Link
                                            href={`/admin/workouts/${workout.id}`}
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 text-sm font-bold text-white transition hover:border-sky-400 hover:text-sky-400 sm:w-auto"
                                        >
                                            <Eye className="h-4 w-4" />
                                            Bekijken
                                        </Link>

                                        <Link
                                            href={`/admin/workouts/${workout.id}/edit`}
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 text-sm font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
                                        >
                                            Bewerken
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                deleteWorkout(workout)
                                            }
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/30 px-4 py-3 text-sm font-bold text-red-400 transition hover:border-red-400 hover:bg-red-500/10 hover:text-red-300 sm:w-auto"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </AdminLayout>
    );
}