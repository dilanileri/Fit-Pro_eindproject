import CheckoutLayout from '@/Layouts/CheckoutLayout';
import { Link } from '@inertiajs/react';
import { ArrowRight, BadgeCheck, CheckCircle } from 'lucide-react';

export default function Success() {
    return (
        <CheckoutLayout>
            <section className="mx-auto max-w-3xl">
                <div className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/10 via-slate-900 to-slate-950 p-8 text-center shadow-2xl shadow-black/40 md:p-10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500/10">
                        <CheckCircle className="h-11 w-11 text-green-400" />
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                        Betaling geslaagd
                    </p>

                    <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                        Je membership is geactiveerd
                    </h1>

                    <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                        Je betaling is gelukt, log in om toegang te krijgen tot
                        je persoonlijke dashboard en trainingsschema's
                    </p>

                    <div className="mt-8 rounded-2xl border border-slate-800 bg-black/25 p-5">
                        <div className="flex items-center justify-center gap-3">
                            <BadgeCheck className="h-5 w-5 text-green-400" />
                            <span className="font-bold text-white">
                                Fit-Pro Membership actief
                            </span>
                        </div>
                    </div>

                    <Link
                        href="/member/membership/logout-to-login"
                        method="post"
                        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-7 py-4 font-bold text-slate-950 transition hover:bg-green-400 sm:w-auto"
                    >
                        Ga verder naar inloggen
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </CheckoutLayout>
    );
}