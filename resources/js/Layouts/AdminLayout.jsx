import { Link } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="flex">
                <aside className="w-64 min-h-screen bg-slate-900 p-6">
                    <h1 className="text-2xl font-bold text-green-400 mb-8">
                        Fit-Pro Admin
                    </h1>

                    <nav className="space-y-3">
                        <Link className="block hover:text-green-400" href="/admin">
                            Dashboard
                        </Link>
                        <Link className="block hover:text-green-400" href="/admin/exercises">
                            Oefeningen
                        </Link>
                        <Link className="block hover:text-green-400" href="/admin/workouts">
                            Workouts
                        </Link>
                    </nav>
                </aside>

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}