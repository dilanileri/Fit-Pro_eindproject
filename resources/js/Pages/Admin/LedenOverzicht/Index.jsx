import AdminLayout from '@/Layouts/AdminLayout';
import { useState } from 'react';
import {
    BadgeCheck,
    Mail,
    MapPin,
    Ruler,
    Scale,
    User,
    Users,
    CalendarDays,
    Search,
} from 'lucide-react';

export default function Index({ members }) {
    const [search, setSearch] = useState('');

    const filteredMembers = members.filter((member) => {
        const query = search.toLowerCase();

        return (
            member.name?.toLowerCase().includes(query) ||
            member.email?.toLowerCase().includes(query) ||
            member.city?.toLowerCase().includes(query) ||
            member.membership_type?.toLowerCase().includes(query)
        );
    });

    function formatDate(date) {
        return new Date(date).toLocaleDateString('nl-BE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    }

    return (
        <AdminLayout>
            <section className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                            <Users className="h-4 w-4" />
                            Leden
                        </div>

                        <h1 className="text-3xl font-black text-white">
                            Ledenoverzicht
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                            Bekijk alle geregistreerde members en hun profielinformatie.
                        </p>

                    </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4 shadow-lg shadow-black/20">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl"></div>

                    {/* <div className="relative flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-black/30 px-4 py-3 transition focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20"> */}
                    <Search className="h-5 w-5 text-white-500 mb-2" />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Zoek op naam, email, stad of membership..."
                        className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20"

                    />
                    {/* </div> */}
                </div>

                {filteredMembers.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">
                        <Users className="mx-auto mb-4 h-10 w-10 text-slate-500" />

                        <h2 className="text-xl font-bold text-white">
                            Nog geen leden
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Er zijn momenteel nog geen members geregistreerd.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-5 xl:grid-cols-2">
                        {filteredMembers.map((member) => (
                            <article
                                key={member.id}
                                className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-5 shadow-xl shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-sky-400/30 md:p-6"
                            >
                                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-500/5 blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10">
                                                <User className="h-7 w-7 text-sky-400" />
                                            </div>

                                            <div>
                                                <h2 className="text-xl font-black text-white">
                                                    {member.name}
                                                </h2>

                                                <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                                                    <Mail className="h-4 w-4 text-slate-500" />
                                                    {member.email}
                                                </div>
                                            </div>
                                        </div>

                                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                                            <BadgeCheck className="h-3 w-3" />
                                            {member.membership_type || 'Geen membership'}
                                        </span>
                                    </div>

                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="rounded-2xl border border-slate-800 bg-black/20 p-4">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                Geslacht
                                            </p>
                                            <p className="mt-2 font-bold text-white">
                                                {member.gender || '-'}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-slate-800 bg-black/20 p-4">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                Leeftijd
                                            </p>
                                            <p className="mt-2 font-bold text-white">
                                                {member.age || '-'}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-slate-800 bg-black/20 p-4">
                                            <div className="mb-2 flex items-center gap-2 text-slate-500">
                                                <Ruler className="h-4 w-4" />
                                                <p className="text-xs font-semibold uppercase tracking-wide">
                                                    Lengte
                                                </p>
                                            </div>
                                            <p className="font-bold text-white">
                                                {member.height ? `${member.height} cm` : '-'}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-slate-800 bg-black/20 p-4">
                                            <div className="mb-2 flex items-center gap-2 text-slate-500">
                                                <Scale className="h-4 w-4" />
                                                <p className="text-xs font-semibold uppercase tracking-wide">
                                                    Gewicht
                                                </p>
                                            </div>
                                            <p className="font-bold text-white">
                                                {member.weight ? `${member.weight} kg` : '-'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-2xl border border-slate-800 bg-black/20 p-4">
                                        <div className="mb-2 flex items-center gap-2 text-slate-500">
                                            <MapPin className="h-4 w-4" />
                                            <p className="text-xs font-semibold uppercase tracking-wide">
                                                Locatie
                                            </p>
                                        </div>

                                        <p className="text-sm font-semibold text-slate-300">
                                            {[member.address, member.city]
                                                .filter(Boolean)
                                                .join(', ') || '-'}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 rounded-2xl border border-slate-800 bg-black/20 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-slate-500">
                                        <CalendarDays className="h-4 w-4" />
                                        <p className="text-xs font-semibold uppercase tracking-wide">
                                            Lid sinds
                                        </p>
                                    </div>

                                    <p className="text-sm font-semibold text-slate-300">
                                        {formatDate(member.created_at)}
                                    </p>
                                </div>

                            </article>
                        ))}
                    </div>
                )}
            </section>
        </AdminLayout>
    );
}