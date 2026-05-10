import { Link, Head } from '@inertiajs/react';
import {
    ArrowRight,
    BadgeCheck,
    Check,
    ClipboardList,
    Dumbbell,
    Flame,
    HeartPulse,
    Target,
    Users,
    ShieldCheck
} from 'lucide-react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Fit-Pro" />

            <main className="min-h-screen bg-slate-950 text-white">
                <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <Link href="/">
                            <img
                                src="/images/Logo_darktheme.png"
                                alt="Fit-Pro logo"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>

                        <nav className="flex items-center gap-3">
                            {auth?.user ? (
                                <Link
                                    href={auth.user.role === 'admin' ? '/admin' : '/member'}
                                    className="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-green-400"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:text-green-400 sm:inline-flex"
                                    >
                                        Inloggen
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-green-400"
                                    >
                                        Start nu
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <section
                    className="relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/FP-hero.png')" }}
                >
                    <div className="absolute inset-0 bg-black/65"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent"></div>
                    <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

                    <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pt-28 lg:grid-cols-[1fr_360px] lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                                <Flame className="h-4 w-4" />
                                Premium fitness ervaring
                            </div>

                            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                                Train slimmer.
                                <span className="block text-green-400">
                                    Word sterker.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                Fit-Pro helpt je doelgericht trainen met duidelijke
                                schema’s, overzichtelijke workouts en oefeningen die
                                passen bij jouw niveau.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/register"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400 sm:w-auto"
                                >
                                    Word lid
                                    <ArrowRight className="h-5 w-5" />
                                </Link>

                                <a
                                    href="#memberships"
                                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:border-green-400 hover:text-green-400 sm:w-auto"
                                >
                                    Bekijk abonnementen
                                </a>
                            </div>
                        </div>

                        <div className="hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl lg:block">
                            <Dumbbell className="mb-6 h-12 w-12 text-green-400" />

                            <h2 className="text-3xl font-black text-white">
                                Alles voor jouw training
                            </h2>

                            <div className="mt-6 space-y-3">
                                {[
                                    'Doelgerichte trainingsschema’s',
                                    'Duidelijke workouts',
                                    'Oefeningen per spiergroep',
                                    'Persoonlijk fitnessoverzicht',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                                    >
                                        <BadgeCheck className="h-5 w-5 text-green-400" />
                                        <span className="text-sm font-semibold text-slate-300">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-24">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                            Waarom Fit-Pro
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                            Fitness zonder chaos
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                            Geen onduidelijke lijstjes of losse notities. Alles wat je
                            nodig hebt om gestructureerd te trainen staat overzichtelijk
                            bij elkaar.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: ClipboardList,
                                title: 'Heldere schema’s',
                                text: 'Volg trainingsschema’s met duidelijke dagen en doelen.',
                            },
                            {
                                icon: Dumbbell,
                                title: 'Sterke workouts',
                                text: 'Bekijk per workout de oefeningen, sets, reps en rusttijd.',
                            },
                            {
                                icon: Target,
                                title: 'Train met focus',
                                text: 'Kies schema’s die aansluiten bij jouw doel en niveau.',
                            },
                            {
                                icon: HeartPulse,
                                title: 'BMI inzicht',
                                text: 'Volg je lichaamsgegevens via je persoonlijke profiel.',
                            },
                            {
                                icon: Users,
                                title: 'Voor elk niveau',
                                text: 'Geschikt voor beginners én leden die gerichter willen trainen.',
                            },
                            {
                                icon: Flame,
                                title: 'Blijf consistent',
                                text: 'Bewaar favoriete schema’s en ga sneller verder met trainen.',
                            },
                        ].map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-green-400/50"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                                        <Icon className="h-7 w-7 text-green-400" />
                                    </div>

                                    <h3 className="text-xl font-black text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {feature.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section id="memberships" className="mx-auto max-w-7xl px-6 pb-24">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                            Abonnementen
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                            Kies wat past bij jouw training
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                            Start eenvoudig en groei door wanneer je meer structuur,
                            variatie en focus nodig hebt.
                        </p>
                    </div>

                    <div className="mx-auto max-w-5xl">
                        <div className="relative overflow-hidden rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-500/10 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-black/40 md:p-10">
                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

                            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
                                <div>
                                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                                        <BadgeCheck className="h-4 w-4" />
                                        Fit-Pro Membership
                                    </div>

                                    <h3 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                                        Alles wat je nodig hebt
                                        <span className="block text-green-400">
                                            om sterker te worden.
                                        </span>
                                    </h3>

                                    <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                                        Krijg volledige toegang tot trainingsschema’s,
                                        workouts, oefeningen, favorieten en jouw persoonlijke
                                        fitnessdashboard.
                                    </p>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        {[
                                            'Volledige trainingsschema’s',
                                            'Duidelijke workouts',
                                            'Oefeningen per spiergroep',
                                            'Persoonlijk dashboard',
                                            'Favorieten opslaan',
                                            'BMI overzicht',
                                        ].map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                                            >
                                                <Check className="h-5 w-5 text-green-400" />

                                                <span className="text-sm font-semibold text-slate-300">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-xl shadow-black/30 backdrop-blur-xl">
                                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                                        Membership
                                    </p>

                                    <div className="mt-5 flex items-end gap-2">
                                        <span className="text-6xl font-black text-white">
                                            €29
                                        </span>

                                        <span className="pb-3 text-sm text-slate-500">
                                            / maand
                                        </span>
                                    </div>

                                    <p className="mt-5 text-sm leading-7 text-slate-400">
                                        Eén membership met volledige toegang tot alle functies
                                        van Fit-Pro.
                                    </p>

                                    <Link
                                        href="/register"
                                        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-green-400"
                                    >
                                        Word lid
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>

                                    <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-500/10 p-4">
                                        <div className="flex gap-3">
                                            <ShieldCheck className="mt-0.5 h-5 w-5 text-green-400" />

                                            <p className="text-sm leading-6 text-slate-300">
                                                Toegang tot alle workouts, schema’s en oefeningen
                                                binnen één duidelijke fitnessomgeving.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="border-t border-slate-800 px-6 py-8">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 Fit-Pro. Alle rechten voorbehouden.</p>
                        <p>Train slimmer. Word sterker.</p>
                    </div>
                </footer>
            </main>
        </>
    );
}