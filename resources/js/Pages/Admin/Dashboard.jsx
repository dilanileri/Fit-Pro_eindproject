import AdminLayout from '@/Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/react';
import {
    Activity,
    ArrowRight,
    ClipboardList,
    Dumbbell,
    LayoutDashboard,
} from 'lucide-react';

export default function Dashboard({ stats }) {
    const { auth } = usePage().props;

    const statCards = [
        {
            label: 'Oefeningen',
            value: stats.exercises,
            icon: Dumbbell,
        },
        {
            label: 'Workouts',
            value: stats.workouts,
            icon: Activity,
        },
        {
            label: 'Trainingsschema’s',
            value: stats.trainingPlans,
            icon: ClipboardList,
        },
    ];

    const quickActions = [
        {
            label: 'Nieuwe oefening',
            href: '/admin/exercises/create',
        },
        {
            label: 'Nieuwe workout',
            href: '/admin/workouts/create',
        },
        {
            label: 'Nieuw trainingsschema',
            href: '/admin/training-plans/create',
        },
    ];

    return (
        <AdminLayout>
            <section className="space-y-6 md:space-y-8">
                <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 md:p-8">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                        <LayoutDashboard className="h-4 w-4" />
                        Admin dashboard
                    </div>

                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Welkom terug, {auth.user.name}
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        Beheer de oefeningen, workouts en trainingsschema’s van
                        Fit-Pro vanuit één overzichtelijke adminomgeving.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {statCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.label}
                                className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg shadow-black/10 md:p-6"
                            >
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-400">
                                            {card.label}
                                        </p>

                                        <p className="mt-2 text-4xl font-black text-white">
                                            {card.value}
                                        </p>
                                    </div>

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                                        <Icon className="h-7 w-7 text-green-400" />
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500">
                                    Totaal aantal items in deze categorie.
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 md:p-8">
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-black text-white">
                                Snelle acties
                            </h2>

                            <p className="mt-2 text-sm text-slate-400">
                                Voeg snel nieuwe content toe aan je platform.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {quickActions.map((action) => (
                            <Link
                                key={action.href}
                                href={action.href}
                                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-green-400/60 hover:bg-green-500/5"
                            >
                                <span>{action.label}</span>
                                <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:text-green-400" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}