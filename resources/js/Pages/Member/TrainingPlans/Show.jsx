import MemberLayout from '@/Layouts/MemberLayout';
import FavoriteButton from '@/Components/MemberComponents/FavoriteButton';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    ClipboardList,
    Dumbbell,
    Flame,
    Target,
} from 'lucide-react';
import BottomNavigation from '@/Components/MemberComponents/BottomNavigation';

export default function Show({ trainingPlan, isFavorite }) {
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
                    {trainingPlan.image && (
                        <img
                            src={trainingPlan.image}
                            alt={trainingPlan.title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60"></div> */}
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>
                    <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-green-400/10 blur-3xl"></div>

                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                                <ClipboardList className="h-4 w-4" />
                                Trainingsschema
                            </div>



                            <FavoriteButton
                                isFavorite={isFavorite}
                                trainingPlanId={trainingPlan.id}
                                className="absolute left-1 top-1 z-20"
                            />


                            <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                                {trainingPlan.title}
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                                {trainingPlan.description ||
                                    'Bekijk de gekoppelde workouts en volg dit schema stap voor stap.'}
                            </p>
                        </div>

                        <div className=" rounded-3xl border border-slate-800 bg-black/30 p-5 shadow-xl shadow-black/30 backdrop-blur md:p-6">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10">
                                    <Dumbbell className="h-7 w-7 text-green-400" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                        Overzicht
                                    </p>
                                    <h2 className="text-xl font-bold text-white">
                                        Schema info
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-slate-500">
                                        <Target className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            Doel
                                        </span>
                                    </div>

                                    <p className="font-bold text-white">
                                        {trainingPlan.goal}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                        <div className="mb-2 flex items-center gap-2 text-slate-500">
                                            <Flame className="h-4 w-4" />
                                            <span className="text-xs font-semibold uppercase">
                                                Niveau
                                            </span>
                                        </div>

                                        <p className="font-bold text-green-400">
                                            {trainingPlan.difficulty}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                        <div className="mb-2 flex items-center gap-2 text-slate-500">
                                            <CalendarDays className="h-4 w-4" />
                                            <span className="text-xs font-semibold uppercase">
                                                Duur
                                            </span>
                                        </div>

                                        <p className="font-bold text-sky-400">
                                            {trainingPlan.duration_weeks}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                                Planning
                            </p>

                            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                                Workouts in dit schema
                            </h2>
                        </div>
                    </div>

                    {trainingPlan.workouts.length === 0 ? (
                        <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/70 p-8 text-center">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-green-500/10">
                                <Dumbbell className="h-8 w-8 text-green-400" />
                            </div>

                            <h3 className="text-xl font-bold text-white">
                                Geen workouts gekoppeld
                            </h3>

                            <p className="mt-3 text-sm text-slate-400">
                                Dit schema bevat momenteel nog geen workouts.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {trainingPlan.workouts.map((workout, index) => (
                                <Link
                                    key={workout.id}
                                    href={`/member/workouts/${workout.id}`}
                                    className="group flex min-h-[230px] flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-green-400/60 md:p-6"
                                >
                                    <div>
                                        <div className="mb-5 flex items-start justify-between gap-4">
                                            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 p-3">
                                                <Dumbbell className="h-6 w-6 text-green-400" />
                                            </div>

                                            <span className="rounded-full border border-sky-400/20 bg-sky-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-400">
                                                {workout.pivot?.day_name ||
                                                    `Dag ${index + 1}`}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-black text-white">
                                            {workout.title}
                                        </h3>

                                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                                            {workout.description ||
                                                'Bekijk de oefeningen, sets, reps en rusttijd voor deze workout.'}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
                                        <span className="text-sm font-semibold text-slate-400">
                                            Bekijk workout
                                        </span>

                                        <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-green-400" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <BottomNavigation />
            </section>
        </MemberLayout>
    );
}