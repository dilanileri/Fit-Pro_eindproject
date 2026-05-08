import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { url } = usePage();
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="flex">
                <aside className="w-64 min-h-screen bg-slate-900 p-6">
                    <h1 className="text-2xl font-bold text-green-400 mb-8">
                        Fit-Pro Admin
                    </h1>

                    <nav className="space-y-3">
                        <Link className={`block rounded px-3 py-2 ${url === '/admin'
                            ? 'bg-slate-800 text-green-400'
                            : 'hover:text-green-400'
                            }`}
                            href="/admin"
                        >
                            Dashboard
                        </Link>
                        <Link className={`block rounded px-3 py-2 ${url.startsWith('/admin/exercises')
                            ? 'bg-slate-800 text-green-400'
                            : 'hover:text-green-400'
                            }`}
                            href="/admin/exercises"
                        >
                            Oefeningen
                        </Link>
                        <Link className={`block rounded px-3 py-2 ${url.startsWith('/admin/workouts')
                            ? 'bg-slate-800 text-green-400'
                            : 'hover:text-green-400'
                            }`}
                            href="/admin/workouts"
                        >
                            Workouts
                        </Link>
                        <Link className={`block rounded px-3 py-2 ${url.startsWith('/admin/training-plans')
                            ? 'bg-slate-800 text-green-400'
                            : 'hover:text-green-400'
                            }`}
                            href="/admin/training-plans"
                        >
                            Trainingsschema's
                        </Link>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-red-400 hover:text-red-300"
                        >
                            Uitloggen
                        </Link>
                    </nav>
                </aside>

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div >
    );
}