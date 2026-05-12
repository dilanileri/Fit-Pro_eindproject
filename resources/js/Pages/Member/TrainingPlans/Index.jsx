import { Link } from '@inertiajs/react';
import MemberLayout from '@/Layouts/MemberLayout';
import {
    ArrowRight,
    CalendarDays,
    ClipboardList,
    Dumbbell,
    Flame,
    Target,
} from 'lucide-react';

export default function Index({ trainingPlans }) {
    return (
        <MemberLayout>
            <section className="space-y-8">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl shadow-black/40 md:p-8">
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                        alt="Fitness training"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                            <ClipboardList className="h-4 w-4" />
                            Trainingsbibliotheek
                        </div>

                        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                            Trainingsschema&apos;s
                        </h1>

                        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                            Kies een schema dat past bij jouw doel, niveau en
                            trainingsritme. Elk schema bestaat uit duidelijke
                            workouts en oefeningen.
                        </p>
                    </div>
                </div>

                {trainingPlans.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/70 p-8 text-center">
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-green-500/10">
                            <Dumbbell className="h-8 w-8 text-green-400" />
                        </div>

                        <h2 className="text-2xl font-bold text-white">
                            Geen trainingsschema&apos;s gevonden
                        </h2>

                        <p className="mt-3 text-sm text-slate-400">
                            Er zijn momenteel nog geen schema&apos;s beschikbaar.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {trainingPlans.map((plan) => (
                            <Link
                                key={plan.id}
                                href={`/member/training-plans/${plan.id}`}
                                className="group flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-green-400/60"
                            >
                                <div>
                                    <div className="mb-6 flex items-start justify-between gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10">
                                            <Dumbbell className="h-7 w-7 text-green-400" />
                                        </div>

                                        <div className="rounded-full border border-sky-400 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
                                            {plan.difficulty}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-black text-white">
                                        {plan.title}
                                    </h2>

                                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-2xl border border-slate-800 bg-black/25 p-4">
                                            <div className="mb-2 flex items-center gap-2 text-slate-500">
                                                <Target className="h-4 w-4" />
                                                <span className="text-xs font-semibold uppercase">
                                                    Doel
                                                </span>
                                            </div>

                                            <p className="text-sm font-bold text-white">
                                                {plan.goal}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-slate-800 bg-black/25 p-4">
                                            <div className="mb-2 flex items-center gap-2 text-slate-500">
                                                <CalendarDays className="h-4 w-4" />
                                                <span className="text-xs font-semibold uppercase">
                                                    Duur
                                                </span>
                                            </div>

                                            <p className="text-sm font-bold text-white">
                                                {plan.duration_weeks}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-slate-800 pt-5">
                                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-400">
                                            <Flame className="h-4 w-4" />
                                            Bekijk schema
                                        </div>

                                        <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-green-400" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </MemberLayout>
    );
}