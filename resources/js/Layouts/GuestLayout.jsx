import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <header className="border-b border-slate-800">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-green-400"
                    >
                        <img
                            src="/images/Logo_darktheme.png"
                            alt="Fit-Pro logo"
                            className="h-50 w-50 object-contain"
                        />
                    </Link>

                    <nav className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-sm text-slate-300 hover:text-green-400"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-green-400"
                        >
                            Registreer
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-12">
                <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                    {children}
                </div>
            </main>
        </div>
    );
}