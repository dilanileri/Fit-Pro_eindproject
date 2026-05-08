import { Head, Link } from '@inertiajs/react';
import {
    ClipboardList,
    Dumbbell,
    Activity,
    Flame,
    ArrowRight,
    BadgeCheck
} from 'lucide-react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welkom bij Fit-Pro" />

            <div className="min-h-screen bg-slate-950 text-white">
                <header className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
                    <h1 className="text-2xl font-bold text-green-400">
                        <img className="h-50 w-50 object-contain" src="images/Logo_darktheme.png" alt="Fit-Pro logo" />
                    </h1>

                    <nav className="flex gap-4">
                        {auth.user ? (
                            <Link
                                href={auth.user.role === 'admin' ? '/admin' : '/member'}
                                className="text-slate-300 hover:text-green-400"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-slate-300 hover:text-green-400"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-slate-950"
                                >
                                    Registreer
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className="relative overflow-hidden">
                    <section className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/FP-hero.png')",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

                            <h1 className=" max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
                                Train slimmer.
                                <span className="block text-green-400">
                                    Word sterker.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                                Ontdek professionele trainingsschema’s, workouts en oefeningen
                                binnen één modern fitnessplatform.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/register"
                                    className=" flex rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-green-400"
                                >
                                    Word member
                                    <ArrowRight className='h-5 w-4 my-auto ml-2' />
                                </Link>

                                <Link
                                    href="/login"
                                    className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-white transition hover:border-green-400 hover:text-green-400"
                                >
                                    Ik heb al een account
                                </Link>
                            </div>



                            <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
                                    <ClipboardList className="mb-4 h-8 w-8 text-green-400 mx-auto" />
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Trainingsschema’s
                                    </h3>


                                    <p className="text-slate-400">
                                        Volg professionele schema’s afgestemd op jouw doelen.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
                                    <Flame className='mb-4 h-8 w-8 text-green-400 mx-auto' />
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Workouts
                                    </h3>

                                    <p className="text-slate-400">
                                        Bekijk gestructureerde trainingsdagen met sets en reps.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
                                    <Dumbbell className='mb-4 h-8 w-8 text-green-400 mx-auto ' />
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Oefeningen
                                    </h3>

                                    <p className="text-slate-400">
                                        Leer correcte uitvoering met duidelijke uitleg.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features sectie */}
                    <section id='features' className="mx-auto max-w-7xl px-6 py-24">
                        <div className="mb-12 text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                                Alles in één platform
                            </p>

                            <h2 className="mt-4 text-4xl font-bold text-white">
                                Wat kan je met Fit-Pro?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                                Fit-Pro combineert trainingsschema’s, workouts, oefeningen en profieldata
                                in één eenvoudige fitness webapp.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    Schema’s volgen
                                </h3>
                                <p className="text-slate-400">
                                    Bekijk duidelijke trainingsschema’s zoals PPL, full body of upper/lower.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    Workouts openen
                                </h3>
                                <p className="text-slate-400">
                                    Bekijk per trainingsdag welke oefeningen je moet uitvoeren.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    Oefeningen leren
                                </h3>
                                <p className="text-slate-400">
                                    Lees uitleg, spiergroep, moeilijkheid en techniek per oefening.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    Profiel beheren
                                </h3>
                                <p className="text-slate-400">
                                    Vul leeftijd, lengte, gewicht en BMI-gegevens aan in je profiel.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Lidmaatschap sectie */}
                    <section id='membership' className="mx-auto max-w-7xl px-6 py-24">
                        <div className="mb-12 text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                                Membership
                            </p>

                            <div className='flex flex-col items-center'>
                                <h2 className="mt-4 text-4xl font-bold text-white">
                                    Start jouw fitness journey
                                </h2>
                                <BadgeCheck className='text-yellow-400 mt-5' />
                            </div>

                            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                                Krijg toegang tot trainingsschema’s, workouts en oefeningen
                                binnen het Fit-Pro platform.
                            </p>
                        </div>

                        <div className="mx-auto max-w-xl rounded-3xl border border-green-500 bg-slate-900 p-10 text-center shadow-2xl shadow-green-500/10">
                            <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                                Basic Member
                            </p>

                            <h3 className="mt-4 text-5xl font-black text-white">
                                €19,99
                            </h3>

                            <p className="mt-2 text-slate-400">
                                per maand
                            </p>

                            <div className="mt-10 space-y-4 text-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <p className="text-slate-300">
                                        Toegang tot trainingsschema’s
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <p className="text-slate-300">
                                        Professionele workouts
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <p className="text-slate-300">
                                        Oefening uitleg en techniek
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <p className=" text-slate-300">
                                        Persoonlijk profiel en BMI
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/register"
                                className="mt-10 inline-block w-full rounded-xl bg-green-500 px-6 py-4 text-lg font-bold text-slate-950 transition hover:bg-green-400"
                            >
                                Word member
                            </Link>
                        </div>
                    </section>
                    <section className="border-t border-slate-800 px-6 py-24">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="text-4xl font-black text-white">
                                Klaar om sterker te worden?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                                Maak vandaag nog een account aan en ontdek hoe Fit-Pro je helpt
                                om gestructureerd te trainen.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/register"
                                    className="rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-green-400"
                                >
                                    Start vandaag
                                </Link>

                                <Link
                                    href="/login"
                                    className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-white transition hover:border-green-400 hover:text-green-400"
                                >
                                    Ik heb al een account
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="border-t border-slate-800 px-6 py-8">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
                        <p>
                            © 2026 Fit-Pro. Fictionele gym webapp voor eindproject.
                        </p>

                        <div className="flex gap-4">
                            <a href="#features" className="hover:text-green-400">
                                Features
                            </a>

                            <a href="#membership" className="hover:text-green-400">
                                Membership
                            </a>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    );
}