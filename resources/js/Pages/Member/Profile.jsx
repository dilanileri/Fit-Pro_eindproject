import MemberLayout from '@/Layouts/MemberLayout';
import { useForm, usePage } from '@inertiajs/react';

export default function Profile() {
    const { auth } = usePage().props;
    const { data, setData, patch, processing, errors } = useForm({
        age: auth.user.age || '',
        height: auth.user.height || '',
        weight: auth.user.weight || '',
        address: auth.user.address || '',
        city: auth.user.city || '',
    });

    function submit(e) {
        e.preventDefault();

        patch('/member/profile');
    }

    return (
        <MemberLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Mijn profiel
                </h1>

                <p className="mt-2 text-slate-400">
                    Bekijk hier je persoonlijke gegevens.
                </p>
            </div>

            <form
                onSubmit={submit}
                className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-4 max-w-2xl"
            >
                <div>
                    <p className="text-sm text-slate-500">Naam</p>
                    <p className="text-lg">{auth.user.name}</p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-lg">{auth.user.email}</p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Leeftijd
                    </p>

                    <input
                        type="number"
                        value={data.age}
                        onChange={(e) => setData('age', e.target.value)}
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        placeholder="Leeftijd"
                    />
                    {errors.age && (
                        <p className="text-sm text-red-400 mt-1">Vul een correcte leeftijd in.</p>
                    )}
                </div>

                <div>
                    <p className="text-sm text-slate-500 mb-2">Lengte</p>
                    <input
                        type="number"
                        value={data.height}
                        onChange={(e) => setData('height', e.target.value)}
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        placeholder="Lengte in cm"
                    />
                    {errors.height && <p className="text-sm text-red-400 mt-1">Vul een correcte lengte in (cm).</p>}
                </div>

                <div>
                    <p className="text-sm text-slate-500 mb-2">Gewicht</p>
                    <input
                        type="number"
                        step="0.1"
                        value={data.weight}
                        onChange={(e) => setData('weight', e.target.value)}
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        placeholder="Gewicht in kg"
                    />
                    {errors.weight && <p className="text-sm text-red-400 mt-1">Vul een correct gewicht in (kg).</p>}
                </div>

                <div>
                    <p className="text-sm text-slate-500 mb-2">Stad</p>
                    <input
                        type="text"
                        value={data.city}
                        onChange={(e) => setData('city', e.target.value)}
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        placeholder="Stad"
                    />
                    {errors.city && <p className="text-sm text-red-400 mt-1">Gebruik een correcte stadsnaam</p>}
                </div>

                <div>
                    <p className="text-sm text-slate-500 mb-2">Adres</p>
                    <input
                        type="text"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        placeholder="Adres"
                    />
                    {errors.address && <p className="text-sm text-red-400 mt-1">Vul een correct adres in.</p>}
                </div>
                <div>
                    <p className="text-sm text-slate-500">
                        Membership status
                    </p>

                    <p className="text-green-400 font-semibold">
                        Actief
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-lg bg-slate-800 px-4 py-2 text-green-400 hover:bg-slate-700"
                >
                    Profiel opslaan
                </button>
            </form>
        </MemberLayout >
    );
}