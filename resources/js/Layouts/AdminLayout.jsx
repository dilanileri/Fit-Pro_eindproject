import { Link, usePage } from '@inertiajs/react';
import {
    Activity,
    ClipboardList,
    Dumbbell,
    LayoutDashboard,
    LogOut,
} from 'lucide-react';

export default function AdminLayout({ children }) {
    const { url } = usePage();

    const navLinks = [
        {
            label: 'Dashboard',
            href: '/admin',
            active: url === '/admin',
            icon: LayoutDashboard,
        },
        {
            label: 'Oefeningen',
            href: '/admin/exercises',
            active: url.startsWith('/admin/exercises'),
            icon: Dumbbell,
        },
        {
            label: 'Workouts',
            href: '/admin/workouts',
            active: url.startsWith('/admin/workouts'),
            icon: Activity,
        },
        {
            label: "Trainingsschema's",
            href: '/admin/training-plans',
            active: url.startsWith('/admin/training-plans'),
            icon: ClipboardList,
        },
    ];

    return (
        <div className="min-h-screen select-none bg-slate-950 text-slate-100">
            <aside className="border-b border-slate-800 bg-slate-900/95 px-4 py-4 md:fixed md:left-0 md:top-0 md:h-screen md:w-72 md:border-b-0 md:border-r md:px-6">
                <Link href="/admin" className="mb-5 flex items-center md:mb-8">
                    <img
                        src="/images/Logo_darktheme.png"
                        alt="Fit-Pro logo"
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                <nav className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                    {navLinks.map((link) => {
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${link.active
                                    ? 'bg-green-500/10 text-green-400'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-4 border-t border-slate-800 pt-4 md:absolute md:bottom-6 md:left-6 md:right-6">
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                    >
                        <LogOut className="h-5 w-5" />
                        Uitloggen
                    </Link>
                </div>
            </aside>

            <main className="px-4 py-6 sm:px-6 md:ml-72 md:p-8">
                {children}
            </main>
        </div>
    );
}