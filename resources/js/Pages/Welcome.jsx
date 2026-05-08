import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welkom bij Fit-Pro" />

            <div className="min-h-screen bg-slate-950 text-white">
                <header className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
                    <h1 className="text-2xl font-bold text-green-400">
                        Fit-Pro
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

                <main className="px-8 py-20">
                    <section className="mx-auto max-w-5xl text-center">
                        <p className="mb-4 text-green-400 font-semibold">
                            Fictionele gym webapp
                        </p>

                        <h2 className="text-5xl font-bold mb-6">
                            Train slimmer met Fit-Pro
                        </h2>

                        <p className="mx-auto max-w-2xl text-slate-400 text-lg mb-8">
                            Bekijk trainingsschema's, volg workouts en ontdek oefeningen
                            die passen bij jouw fitnessdoelen.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Link
                                href="/register"
                                className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-slate-950"
                            >
                                Word member
                            </Link>

                            <Link
                                href="/login"
                                className="rounded-lg border border-slate-700 px-6 py-3 text-slate-300 hover:border-green-400 hover:text-green-400"
                            >
                                Ik heb al een account
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}