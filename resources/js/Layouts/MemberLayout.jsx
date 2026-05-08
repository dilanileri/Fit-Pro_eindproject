import { Link, usePage } from '@inertiajs/react';

export default function MemberLayout({ children }) {
    const { url, props } = usePage();
    const { auth } = props;
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <header className="border-b border-slate-800 bg-slate-900">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/member/training-plans" className="text-2xl font-bold text-green-400">
                        Fit-Pro
                    </Link>

                    <nav className="flex items-center gap-6">
                        <Link
                            href="/member"
                            className={
                                url === '/member'
                                    ? 'text-green-400'
                                    : 'text-slate-300 hover:text-green-400'
                            }
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/member/training-plans"
                            className={
                                url.startsWith('/member/training-plans')
                                    ? 'text-green-400'
                                    : 'text-slate-300 hover:text-green-400'
                            }
                        >
                            Trainingsschema's
                        </Link>

                        <Link
                            href="/member/profile"
                            className={
                                url === '/member/profile'
                                    ? 'text-green-400'
                                    : 'text-slate-300 hover:text-green-400'
                            }
                        >
                            Profiel
                        </Link>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-sm text-red-400 hover:text-red-300"
                        >
                            Uitloggen
                        </Link>

                        <span className="text-sm text-slate-500">
                            {auth.user.name}
                        </span>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">
                {children}
            </main>
        </div>
    );
}