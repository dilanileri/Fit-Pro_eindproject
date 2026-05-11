import MemberLayout from '@/Layouts/MemberLayout';
import { useForm, usePage } from '@inertiajs/react';
import {
    BadgeCheck,
    MapPin,
    Ruler,
    Save,
    Scale,
    User,
} from 'lucide-react';

export default function Profile() {
    const { auth } = usePage().props;

    const {
        data,
        setData,
        patch,
        processing,
        errors,
        recentlySuccessful,
    } = useForm({
        age: auth.user.age || '',
        height: auth.user.height || '',
        weight: auth.user.weight || '',
        address: auth.user.address || '',
        city: auth.user.city || '',
    });

    function submit(e) {
        e.preventDefault();

        patch('/member/profile', {
            preserveScroll: true, //voorkomt springen na klikken opslaan
        });
    }

    const profileItems = [
        data.age,
        data.height,
        data.weight,
        data.city,
        data.address,
    ];

    const completedItems = profileItems.filter(Boolean).length;
    const completionPercentage = Math.round(
        (completedItems / profileItems.length) * 100
    );

    const inputClass =
        'w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20';

    const labelClass = 'mb-2 block text-sm font-semibold text-slate-400';

    return (
        <MemberLayout>
            <section className="space-y-6 md:space-y-8">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                            <User className="h-4 w-4" />
                            Mijn profiel
                        </div>

                        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                            Persoonlijke gegevens
                        </h1>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                            Beheer je gegevens zodat Fit-Pro je dashboard, BMI en
                            profielinformatie correct kan weergeven.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
                    <aside className="space-y-6">
                        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-500/10">
                                    <User className="h-8 w-8 text-green-400" />
                                </div>

                                <div>
                                    <h2 className="text-xl font-black text-white">
                                        {auth.user.name}
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        {auth.user.email}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-4">
                                <div className="flex items-center gap-3">
                                    <BadgeCheck className="h-5 w-5 text-green-400" />

                                    <div>
                                        <p className="text-sm text-slate-400">
                                            Membership status
                                        </p>

                                        <p className="font-bold text-green-400">
                                            {auth.user.membership_type || 'Geen actief membership'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20">
                            <h2 className="text-xl font-black text-white">
                                Profielstatus
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Hoe vollediger je profiel, hoe beter je dashboard
                                aansluit bij jouw gegevens.
                            </p>

                            <div className="mt-6">
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-semibold text-slate-400">
                                        Ingevuld
                                    </span>

                                    <span className="font-bold text-green-400">
                                        {completionPercentage}%
                                    </span>
                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                                    <div
                                        className="h-full rounded-full bg-green-500"
                                        style={{
                                            width: `${completionPercentage}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <form
                        onSubmit={submit}
                        className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 md:p-8"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-black text-white">
                                Gegevens aanpassen
                            </h2>

                            <p className="mt-2 text-sm text-slate-400">
                                Pas hier je persoonlijke en fysieke gegevens aan.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className={labelClass}>Leeftijd</label>

                                <input
                                    type="number"
                                    value={data.age}
                                    onChange={(e) =>
                                        setData('age', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="Bijv. 24"
                                />

                                {errors.age && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Vul een correcte leeftijd in.
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className={labelClass}>Stad</label>

                                <input
                                    type="text"
                                    value={data.city}
                                    onChange={(e) =>
                                        setData('city', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="Bijv. Hasselt"
                                />

                                {errors.city && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Gebruik een correcte stadsnaam.
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Lengte in cm
                                </label>

                                <div className="relative">
                                    <Ruler className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

                                    <input
                                        type="number"
                                        value={data.height}
                                        onChange={(e) =>
                                            setData('height', e.target.value)
                                        }
                                        className={`${inputClass} pl-11`}
                                        placeholder="Bijv. 180"
                                    />
                                </div>

                                {errors.height && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Vul een correcte lengte in cm in.
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Gewicht in kg
                                </label>

                                <div className="relative">
                                    <Scale className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

                                    <input
                                        type="number"
                                        step="0.1"
                                        value={data.weight}
                                        onChange={(e) =>
                                            setData('weight', e.target.value)
                                        }
                                        className={`${inputClass} pl-11`}
                                        placeholder="Bijv. 75.5"
                                    />
                                </div>

                                {errors.weight && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Vul een correct gewicht in kg in.
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <label className={labelClass}>Adres</label>

                                <div className="relative">
                                    <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

                                    <input
                                        type="text"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData('address', e.target.value)
                                        }
                                        className={`${inputClass} pl-11`}
                                        placeholder="Straat en huisnummer"
                                    />
                                </div>

                                {errors.address && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Vul een correct adres in.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-slate-500">
                                    Je naam en e-mailadres komen uit je account.
                                </p>

                                {recentlySuccessful && (
                                    <p className="mt-2 text-sm font-semibold text-green-400">
                                        Profiel succesvol opgeslagen.
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                <Save className="h-5 w-5" />
                                {processing
                                    ? 'Opslaan...'
                                    : 'Profiel opslaan'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </MemberLayout>
    );
}