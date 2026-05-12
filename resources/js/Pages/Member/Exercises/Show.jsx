import BottomNavigation from '@/Components/MemberComponents/BottomNavigation';
import MemberLayout from '@/Layouts/MemberLayout';
import { Link, usePage } from '@inertiajs/react';
import {
    ArrowLeft,
    Dumbbell,
    Flame,
    ImageOff,
    PlayCircle,
    ShieldCheck,
    Repeat,
    Timer,
    Target,
} from 'lucide-react';

export default function Show({ exercise }) {
    const { url } = usePage();
    const params = new URLSearchParams(url.split('?')[1]);

    const sets = params.get('sets');
    const reps = params.get('reps');
    const rest = params.get('rest');
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

                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-2xl shadow-black/40">
                    {exercise.image && (
                        <img
                            src={exercise.image}
                            alt={exercise.name}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}

                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>
                    <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-green-400/10 blur-3xl"></div>

                    <div className="relative z-10 grid min-h-[460px] gap-8 p-6 md:p-8 lg:grid-cols-[1fr_340px] lg:items-center xl:p-10">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400 backdrop-blur">
                                <Dumbbell className="h-4 w-4" />
                                Oefening
                            </div>

                            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                                {exercise.name}
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                                {exercise.description ||
                                    'Bekijk de uitvoering, spiergroep en aandachtspunten van deze oefening.'}
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-black/30 p-5 shadow-xl shadow-black/30 backdrop-blur md:p-6">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10">
                                    <Target className="h-7 w-7 text-sky-400" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                        Overzicht
                                    </p>
                                    <h2 className="text-xl font-bold text-white">
                                        Oefening info
                                    </h2>
                                </div>
                            </div>

                            <div className="grid gap-3">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-slate-500">
                                        <Target className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            Spiergroep
                                        </span>
                                    </div>

                                    <p className="font-bold text-white">
                                        {exercise.muscle_group ||
                                            'Niet ingesteld'}
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
                                        {exercise.difficulty || 'Algemeen'}
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                        <div className="mb-2 flex items-center gap-2 text-slate-500">
                                            <Repeat className="h-4 w-4" />

                                            <span className="text-xs font-semibold uppercase">
                                                Sets
                                            </span>
                                        </div>

                                        <p className="font-bold text-sky-400">
                                            {sets || 'Niet ingesteld'}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                        <div className="mb-2 flex items-center gap-2 text-slate-500">
                                            <Dumbbell className="h-4 w-4" />

                                            <span className="text-xs font-semibold uppercase">
                                                Reps
                                            </span>
                                        </div>

                                        <p className="font-bold text-sky-400">
                                            {reps || 'Niet ingesteld'}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                        <div className="mb-2 flex items-center gap-2 text-slate-500">
                                            <Timer className="h-4 w-4" />

                                            <span className="text-xs font-semibold uppercase">
                                                Rust
                                            </span>
                                        </div>

                                        <p className="font-bold text-sky-400">
                                            {rest ? `${rest}s` : 'Niet ingesteld'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
                    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 md:p-8">
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/5 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">
                                    <ShieldCheck className="h-6 w-6 text-green-400" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
                                        Techniek
                                    </p>
                                    <h2 className="text-2xl font-black text-white">
                                        Uitvoering
                                    </h2>
                                </div>
                            </div>

                            <p className="text-sm leading-7 text-slate-400 sm:text-base">
                                {exercise.instructions ||
                                    'Voer de oefening gecontroleerd uit, behoud een correcte houding en focus op techniek boven gewicht.'}
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20">
                        <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-green-500/5 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                                    <PlayCircle className="h-6 w-6 text-sky-400" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                                        Video
                                    </p>
                                    <h2 className="text-xl font-black text-white">
                                        Extra uitleg
                                    </h2>
                                </div>
                            </div>

                            <p className="text-sm leading-6 text-slate-400">
                                Bekijk eventueel een video of vraag begeleiding
                                als je twijfelt over de uitvoering.
                            </p>

                            {exercise.video_url ? (
                                <a
                                    href={exercise.video_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-bold text-slate-950 shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400"
                                >
                                    <PlayCircle className="h-5 w-5" />
                                    Video bekijken
                                </a>
                            ) : (
                                <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-black/20 p-5 text-sm text-slate-400">
                                    Geen video gekoppeld aan deze oefening.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <BottomNavigation />
            </section>
        </MemberLayout>
    );
}