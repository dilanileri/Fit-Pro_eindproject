import CheckoutLayout from '@/Layouts/CheckoutLayout';
import { useForm } from '@inertiajs/react';
import {
    ArrowLeft,
    BadgeCheck,
    Check,
    CreditCard,
    Lock,
    ShieldCheck,
} from 'lucide-react';

export default function Checkout() {
    const { data, setData, post, processing, errors } = useForm({
        card_name: '',
        card_number: '',
    });

    function submit(e) {
        e.preventDefault();
        // console.log('submit werkt');


        post('/member/membership/checkout', {
            preserveScroll: true,
        });
    }

    const inputClass =
        'w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20';

    return (
        <CheckoutLayout>
            <section className="space-y-6 md:space-y-8">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                            <CreditCard className="h-4 w-4" />
                            Membership checkout
                        </div>

                        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                            Activeer je membership
                        </h1>

                        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                            Rond je registratie af en krijg volledige toegang tot
                            Fit-Pro, inclusief trainingsschema’s, workouts,
                            oefeningen en je persoonlijke dashboard.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
                    <form
                        onSubmit={submit}
                        className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl shadow-black/30 md:p-8"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-black text-white">
                                Betaalgegevens
                            </h2>

                            <p className="mt-2 text-sm leading-7 text-slate-400">
                                Dit is een demo checkout voor het eindwerk.
                                Er wordt geen echte betaling uitgevoerd.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-400">
                                    Naam op kaart
                                </label>

                                <input
                                    type="text"
                                    value={data.card_name}
                                    onChange={(e) =>
                                        setData('card_name', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="Bijv. Dilan Ileri"
                                />

                                {errors.card_name && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Vul een naam in.
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-400">
                                    Kaartnummer
                                </label>

                                <input
                                    type="text"
                                    value={data.card_number}
                                    onChange={(e) =>
                                        setData('card_number', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="1234 5678 9012 3456"
                                />

                                {errors.card_number && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Vul een kaartnummer in.
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-7 py-4 font-bold text-slate-950 transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <Lock className="h-5 w-5" />

                            {processing
                                ? 'Verwerken...'
                                : 'Membership activeren'}
                        </button>
                    </form>

                    <aside className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/10 via-slate-900 to-slate-950 p-6 shadow-2xl shadow-black/30">
                        <BadgeCheck className="mb-5 h-10 w-10 text-green-400" />

                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                            Fit-Pro Membership
                        </p>

                        <div className="mt-5 flex items-end gap-2">
                            <span className="text-6xl font-black text-white">
                                €29
                            </span>

                            <span className="pb-3 text-sm text-slate-500">
                                / maand
                            </span>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-400">
                            Eén membership met volledige toegang tot alle
                            functionaliteiten binnen Fit-Pro.
                        </p>

                        <div className="mt-8 space-y-3">
                            {[
                                'Volledige trainingsschema’s',
                                'Workouts en oefeningen',
                                'Favorieten opslaan',
                                'Persoonlijk dashboard',
                                'BMI overzicht',
                            ].map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                                >
                                    <Check className="h-5 w-5 text-green-400" />

                                    <span className="text-sm font-semibold text-slate-300">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-green-400/20 bg-green-500/10 p-4">
                            <div className="flex gap-3">
                                <ShieldCheck className="mt-0.5 h-5 w-5 text-green-400" />

                                <p className="text-sm leading-6 text-slate-300">
                                    Demo betaling voor schoolproject. Er worden
                                    geen echte betalingen verwerkt.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </CheckoutLayout>
    );
}