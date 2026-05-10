import MemberLayout from '@/Layouts/MemberLayout';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    Dumbbell,
    Flame,
    Repeat,
    Timer,
} from 'lucide-react';

export default function Show({ workout }) {
    return (
        <MemberLayout>
            <section className="space-y-6 md:space-y-8">
                <Link
                    href="/member/training-plans"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-green-400"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Terug naar trainingsschema&apos;s
                </Link>

                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>
                    <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-green-400/10 blur-3xl"></div>

                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                                <Dumbbell className="h-4 w-4" />
                                Workout
                            </div>

                            <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                                {workout.title}
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                                {workout.description ||
                                    'Bekijk alle oefeningen, sets, herhalingen en rusttijden van deze workout.'}
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-black/30 p-5 shadow-xl shadow-black/30 backdrop-blur md:p-6">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10">
                                    <Flame className="h-7 w-7 text-green-400" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                        Overzicht
                                    </p>
                                    <h2 className="text-xl font-bold text-white">
                                        Workout info
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-slate-500">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            Duur
                                        </span>
                                    </div>

                                    <p className="font-bold text-white">
                                        {workout.duration_minutes} minuten
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-slate-500">
                                        <Flame className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            Niveau
                                        </span>
                                    </div>

                                    <p className="font-bold text-green-400">
                                        {workout.difficulty}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                            Oefeningen
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                            In deze workout
                        </h2>
                    </div>

                    {workout.exercises.length === 0 ? (
                        <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/70 p-8 text-center">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-green-500/10">
                                <Dumbbell className="h-8 w-8 text-green-400" />
                            </div>

                            <h3 className="text-xl font-bold text-white">
                                Geen oefeningen gekoppeld
                            </h3>

                            <p className="mt-3 text-sm text-slate-400">
                                Deze workout bevat momenteel nog geen oefeningen.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {workout.exercises.map((exercise) => (
                                <Link
                                    key={exercise.id}
                                    href={`/member/exercises/${exercise.id}`}
                                    className="group flex min-h-[260px] flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-green-400/60 md:p-6"
                                >
                                    <div>
                                        <div className="mb-5 flex items-start justify-between gap-4">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10">
                                                <Dumbbell className="h-7 w-7 text-green-400" />
                                            </div>

                                            {exercise.muscle_group && (
                                                <span className="rounded-full border border-slate-700 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                                    {exercise.muscle_group}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-black text-white">
                                            {exercise.name}
                                        </h3>

                                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                                            {exercise.description ||
                                                'Bekijk de uitvoering en details van deze oefening.'}
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="rounded-2xl border border-slate-800 bg-black/25 p-3">
                                                <div className="mb-2 flex items-center gap-1 text-slate-500">
                                                    <Repeat className="h-3 w-3" />
                                                    <span className="text-[10px] font-bold uppercase">
                                                        Sets
                                                    </span>
                                                </div>

                                                <p className="font-black text-white">
                                                    {exercise.pivot?.sets}
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-slate-800 bg-black/25 p-3">
                                                <div className="mb-2 flex items-center gap-1 text-slate-500">
                                                    <Dumbbell className="h-3 w-3" />
                                                    <span className="text-[10px] font-bold uppercase">
                                                        Reps
                                                    </span>
                                                </div>

                                                <p className="font-black text-white">
                                                    {exercise.pivot?.reps}
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-slate-800 bg-black/25 p-3">
                                                <div className="mb-2 flex items-center gap-1 text-slate-500">
                                                    <Timer className="h-3 w-3" />
                                                    <span className="text-[10px] font-bold uppercase">
                                                        Rust
                                                    </span>
                                                </div>

                                                <p className="font-black text-white">
                                                    {exercise.pivot?.rest_seconds}s
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-5">
                                            <span className="text-sm font-semibold text-slate-400">
                                                Bekijk oefening
                                            </span>

                                            <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-green-400" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </MemberLayout>
    );
}