import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, ClipboardList, User, LogOut } from 'lucide-react';

export default function MemberLayout({ children }) {
    const { url, props } = usePage();
    const { auth } = props;

    const navLinkClass = (active) =>
        `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${active
            ? 'bg-slate-800 text-green-400'
            : 'text-slate-300 hover:bg-slate-800 hover:text-green-400'
        }`;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
                    <Link href="/member" className="flex items-center">
                        <img
                            src="/images/Logo_darktheme.png"
                            alt="Fit-Pro logo"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>

                    <nav className="flex flex-wrap items-center gap-2">
                        <Link
                            href="/member"
                            className={navLinkClass(url === '/member')}
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>

                        <Link
                            href="/member/training-plans"
                            className={navLinkClass(url.startsWith('/member/training-plans'))}
                        >
                            <ClipboardList className="h-4 w-4" />
                            Trainingsschema's
                        </Link>

                        <Link
                            href="/member/profile"
                            className={navLinkClass(url === '/member/profile')}
                        >
                            <User className="h-4 w-4" />
                            Profiel
                        </Link>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                        >
                            <LogOut className="h-4 w-4" />
                            Uitloggen
                        </Link>
                    </nav>

                    <div className="hidden text-right md:block">
                        <p className="text-xs uppercase tracking-widest text-slate-500">
                            Member
                        </p>
                        <p className="font-semibold text-slate-200">
                            {auth.user.name}
                        </p>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-6 py-10">
                {children}
            </main>
        </div>
    );
}