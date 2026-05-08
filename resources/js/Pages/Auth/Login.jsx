import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />


            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-white">
                    Inloggen
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                    Log in om je trainingsschema’s te bekijken.
                </p>
            </div>


            {
                status && (
                    <div className="mb-4 rounded-lg bg-green-500/10 p-3 text-sm font-medium text-green-400">
                        {status}
                    </div>
                )
            }

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="E-mailadres" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-lg border-slate-700 bg-slate-950 text-white focus:border-green-400 focus:ring-green-400"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-400">
                            Incorrecte inloggegevens
                        </p>
                    )}                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Wachtwoord" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-lg border-slate-700 bg-slate-950 text-white focus:border-green-400 focus:ring-green-400"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    {errors.password && (
                        <p className="mt-2 text-sm text-red-400">
                            Incorrecte inloggegevens
                        </p>
                    )}                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-slate-400">
                            Onthoud mij
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-slate-400 underline hover:text-green-400"                        >
                            Wachtwoord vergeten?
                        </Link>
                    )}

                    <button
                        type="submit"
                        disabled={processing}
                        className="ms-4 rounded-lg bg-green-500 px-5 py-2 font-semibold text-slate-950 hover:bg-green-400 disabled:opacity-50"
                    >
                        Inloggen
                    </button>
                </div>
            </form>
        </GuestLayout >
    );
}
