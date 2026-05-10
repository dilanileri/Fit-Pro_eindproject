import MemberLayout from '@/Layouts/MemberLayout';
import { usePage, Link } from '@inertiajs/react';
import BmiCalculator from '@/Components/BmiCalculator';
import {
    BadgeCheck,
    Heart,
    ClipboardList,
    ArrowRight,
    Dumbbell,
    Flame,
    Activity,
    Ruler,
} from 'lucide-react';

export default function Dashboard({ favoritePlans = [] }) {
    const { auth } = usePage().props;

    const height = auth.user.height;
    const weight = auth.user.weight;

    let bmi = null;

    if (height && weight) {
        const heightInMeters = height / 100;
        bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    }

    return (
        <MemberLayout>
            <section className="space-y-6 md:space-y-8">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>
                    <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-green-400/10 blur-3xl"></div>

                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                                <Flame className="h-4 w-4" />
                                Member dashboard
                            </div>

                            <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                                Welkom terug, {auth.user.name}
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                                Je persoonlijke overzicht voor schema&apos;s,
                                favorieten en lichaamsgegevens. Alles wat je nodig
                                hebt om snel verder te gaan met trainen.
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/member/training-plans"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400 sm:w-auto"
                                >
                                    Start training
                                    <ArrowRight className="h-5 w-5" />
                                </Link>

                                <Link
                                    href="/member/profile"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
                                >
                                    Mijn profiel                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-black/30 p-5 shadow-xl shadow-black/30 backdrop-blur md:p-6">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10">
                                    <Dumbbell className="h-7 w-7 text-green-400" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                        Fit-Pro
                                    </p>
                                    <h2 className="text-xl font-bold text-white">
                                        Jouw trainingsoverzicht
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                    <div className="mb-3 flex items-center gap-2 text-slate-500">
                                        <Heart className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            Favorieten
                                        </span>
                                    </div>

                                    <p className="text-3xl font-black text-white">
                                        {favoritePlans.length}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                    <div className="mb-3 flex items-center gap-2 text-slate-500">
                                        <Ruler className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            BMI
                                        </span>
                                    </div>

                                    <p className="text-3xl font-black text-green-400">
                                        {bmi ?? '--'}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-slate-500">
                                Vul je lengte en gewicht aan via je profiel om je
                                BMI automatisch te laten berekenen.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <div className="group rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-green-400/50 md:p-6">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    Membership
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Jouw huidige toegang
                                </p>
                            </div>

                            <div className="shrink-0 rounded-2xl bg-green-500/10 p-4 transition group-hover:bg-green-500/20">
                                <BadgeCheck className="h-7 w-7 text-green-400" />
                            </div>
                        </div>

                        <div className="inline-flex rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2">
                            <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                                Actief
                            </p>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-400">
                            Je hebt toegang tot alle trainingsschema&apos;s,
                            workouts en oefeningen binnen Fit-Pro.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-center shadow-lg shadow-black/20 md:p-6">
                        <BmiCalculator user={auth.user} />
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg shadow-black/20 md:col-span-2 md:p-6 xl:col-span-1">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    Favoriete schema&apos;s
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Snel verder trainen
                                </p>
                            </div>

                            <div className="shrink-0 rounded-2xl bg-green-500/10 p-4">
                                <Heart className="h-7 w-7 text-green-400" />
                            </div>
                        </div>

                        {favoritePlans.length === 0 ? (
                            <div className="rounded-2xl border border-dashed border-slate-700 bg-black/20 p-5">
                                <p className="text-sm leading-6 text-slate-400">
                                    Je hebt nog geen favoriete schema&apos;s
                                    toegevoegd.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {favoritePlans.map((plan) => (
                                    <Link
                                        key={plan.id}
                                        href={`/member/training-plans/${plan.id}`}
                                        className="group block rounded-2xl border border-slate-800 bg-black/25 p-4 transition hover:-translate-y-0.5 hover:border-green-400/60 hover:bg-green-500/5"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="font-bold text-white">
                                                    {plan.title}
                                                </p>

                                                <p className="mt-1 text-sm text-slate-400">
                                                    {plan.goal}
                                                </p>
                                            </div>

                                            <ArrowRight className="h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-green-400" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-black p-6 shadow-xl shadow-black/30 md:p-8">
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-green-500/5 blur-2xl"></div>

                    <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-5 sm:flex-row">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border border-green-400/20 bg-green-500/10">
                                <ClipboardList className="h-8 w-8 text-green-400" />
                            </div>

                            <div>
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                                    <Activity className="h-3 w-3 text-green-400" />
                                    Training library
                                </div>

                                <h2 className="text-2xl font-black text-white sm:text-3xl">
                                    Trainingsschema&apos;s
                                </h2>

                                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                                    Ontdek alle beschikbare schema&apos;s en kies
                                    een programma dat aansluit bij jouw niveau,
                                    doel en trainingsritme.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/member/training-plans"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-green-400 hover:text-green-400 md:w-auto"
                        >
                            Bekijk schema&apos;s
                            <Dumbbell className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </MemberLayout>
    );
}