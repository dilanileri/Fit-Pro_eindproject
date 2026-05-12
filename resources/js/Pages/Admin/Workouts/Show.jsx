import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Clock3,
    Dumbbell,
    Flame,
    Layers3,
    Target,
} from 'lucide-react';

export default function Show({ workout }) {
    return (
        <AdminLayout>
            <section className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                                <Dumbbell className="h-4 w-4" />
                                Workout
                            </div>

                            <h1 className="text-3xl font-black text-white sm:text-4xl">
                                {workout.title}
                            </h1>

                            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                                {workout.description ||
                                    'Bekijk alle gekoppelde oefeningen en workoutgegevens.'}
                            </p>
                        </div>

                        <Link
                            href="/admin/workouts"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-5 py-3 font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Terug
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                            <Flame className="h-6 w-6 text-sky-400" />
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Moeilijkheid
                        </p>

                        <h2 className="mt-3 text-xl font-black text-white">
                            {workout.difficulty || 'Niet ingesteld'}
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                            <Clock3 className="h-6 w-6 text-sky-400" />
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Duur
                        </p>

                        <h2 className="mt-3 text-xl font-black text-white">
                            {workout.duration_minutes} minuten
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                            <Layers3 className="h-6 w-6 text-sky-400" />
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Oefeningen
                        </p>

                        <h2 className="mt-3 text-xl font-black text-white">
                            {workout.exercises.length}
                        </h2>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                    <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-400/5 blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                                    <Target className="h-6 w-6 text-sky-400" />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-black text-white">
                                        Gekoppelde oefeningen
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Overzicht van alle oefeningen binnen
                                        deze workout.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-full border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300">
                                {workout.exercises.length} gekoppeld
                            </div>
                        </div>

                        {workout.exercises.length === 0 ? (
                            <div className="rounded-2xl border border-dashed border-slate-700 bg-black/20 p-6">
                                <p className="text-sm text-slate-400">
                                    Er zijn nog geen oefeningen gekoppeld aan
                                    deze workout.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {workout.exercises.map((exercise) => (
                                    <div
                                        key={exercise.id}
                                        className="group rounded-3xl border border-slate-800 bg-black/20 p-5 transition duration-200 hover:-translate-y-1 hover:border-sky-400/30"
                                    >
                                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                            <div>
                                                <h3 className="text-xl font-black text-white">
                                                    {exercise.name}
                                                </h3>

                                                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-300">
                                                    <Dumbbell className="h-3 w-3 text-sky-400" />
                                                    {exercise.muscle_group}
                                                </div>
                                            </div>

                                            {exercise.pivot && (
                                                <div className="grid grid-cols-3 gap-3">
                                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-center">
                                                        <p className="text-xs uppercase tracking-wide text-slate-500">
                                                            Sets
                                                        </p>

                                                        <p className="mt-1 font-black text-white">
                                                            {exercise.pivot
                                                                .sets ?? '-'}
                                                        </p>
                                                    </div>

                                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-center">
                                                        <p className="text-xs uppercase tracking-wide text-slate-500">
                                                            Reps
                                                        </p>

                                                        <p className="mt-1 font-black text-white">
                                                            {exercise.pivot
                                                                .reps ?? '-'}
                                                        </p>
                                                    </div>

                                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-center">
                                                        <p className="text-xs uppercase tracking-wide text-slate-500">
                                                            Rust
                                                        </p>

                                                        <p className="mt-1 font-black text-white">
                                                            {exercise.pivot
                                                                .rest_seconds ??
                                                                '-'}{' '}
                                                            sec
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}