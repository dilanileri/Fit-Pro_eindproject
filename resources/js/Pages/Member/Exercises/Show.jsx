import MemberLayout from '@/Layouts/MemberLayout';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Dumbbell,
    Flame,
    PlayCircle,
    Target,
} from 'lucide-react';

export default function Show({ exercise }) {
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

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                                <Dumbbell className="h-4 w-4" />
                                Oefening
                            </div>

                            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                                {exercise.name}
                            </h1>

                            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                                {exercise.description ||
                                    'Bekijk de uitvoering, spiergroep en aandachtspunten van deze oefening.'}
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-800 bg-black/25 p-5">
                                    <div className="mb-3 flex items-center gap-2 text-slate-500">
                                        <Target className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            Spiergroep
                                        </span>
                                    </div>

                                    <p className="text-lg font-bold text-white">
                                        {exercise.muscle_group || 'Niet ingesteld'}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-black/25 p-5">
                                    <div className="mb-3 flex items-center gap-2 text-slate-500">
                                        <Flame className="h-4 w-4" />
                                        <span className="text-xs font-semibold uppercase">
                                            Niveau
                                        </span>
                                    </div>

                                    <p className="text-lg font-bold text-green-400">
                                        {exercise.difficulty || 'Algemeen'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/40">
                        {exercise.image ? (
                            <img
                                src={exercise.image}
                                alt={exercise.name}
                                className="h-full min-h-[320px] w-full object-cover"
                            />
                        ) : (
                            <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
                                <div>
                                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500/10">
                                        <Dumbbell className="h-10 w-10 text-green-400" />
                                    </div>

                                    <p className="font-semibold text-slate-400">
                                        Geen afbeelding beschikbaar
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 md:p-8">
                        <h2 className="text-2xl font-black text-white">
                            Uitvoering
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                            {exercise.instructions ||
                                'Voer de oefening gecontroleerd uit, behoud een correcte houding en focus op techniek boven gewicht.'}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20">
                        <h2 className="text-xl font-black text-white">
                            Extra
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Bekijk eventueel een video of vraag begeleiding als je
                            twijfelt over de uitvoering.
                        </p>

                        {exercise.video_url ? (
                            <a
                                href={exercise.video_url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-bold text-slate-950 transition hover:bg-green-400"
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
            </section>
        </MemberLayout>
    );
}