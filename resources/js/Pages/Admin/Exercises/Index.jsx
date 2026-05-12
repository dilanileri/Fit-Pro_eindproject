import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import { ArrowRight, Dumbbell, Plus, Video, Trash2 } from 'lucide-react';

export default function Index({ exercises }) {

    function deleteExercise(exercise) {
        if (!confirm(`Ben je zeker dat je "${exercise.name}" wilt verwijderen?`)) {
            return;
        }

        router.delete(`/admin/exercises/${exercise.id}`, {
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
                            Oefeningen
                        </h1>

                        <p className="mt-2 text-sm text-slate-400">
                            Beheer alle oefeningen die gebruikt worden in workouts.
                        </p>
                    </div>

                    <Link
                        href="/admin/exercises/create"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-green-400 sm:w-auto"
                    >
                        <Plus className="h-5 w-5" />
                        Nieuwe oefening
                    </Link>
                </div>

                {exercises.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">
                        <Dumbbell className="mx-auto mb-4 h-10 w-10 text-slate-500" />

                        <h2 className="text-xl font-bold text-white">
                            Nog geen oefeningen
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Voeg je eerste oefening toe om workouts op te bouwen.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-5 lg:grid-cols-2">
                        {exercises.map((exercise) => (
                            <article
                                key={exercise.id}
                                className="transition-all duration-300 hover:border-green-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-lg shadow-black/20"
                            >
                                {exercise.image && (
                                    <img
                                        src={exercise.image}
                                        alt={exercise.name}
                                        className="h-48 w-full object-cover"
                                    />
                                )}

                                <div className="p-5 md:p-6">
                                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h2 className="text-2xl font-black text-white">
                                                {exercise.name}
                                            </h2>

                                            <p className="mt-2 text-sm text-slate-400">
                                                {exercise.description}
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 gap-2">
                                            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                                                {exercise.muscle_group}
                                            </span>

                                            <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                                                {exercise.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            {exercise.video_url && (
                                                <a
                                                    href={exercise.video_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-green-400"
                                                >
                                                    <Video className="h-4 w-4" />
                                                    Bekijk video
                                                </a>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <Link
                                                href={`/admin/exercises/${exercise.id}/edit`}
                                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 text-sm font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
                                            >
                                                Bewerken
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => deleteExercise(exercise)}
                                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/30 px-4 py-3 text-sm font-bold text-red-400 transition hover:border-red-400 hover:bg-red-500/10 hover:text-red-300 sm:w-auto"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
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