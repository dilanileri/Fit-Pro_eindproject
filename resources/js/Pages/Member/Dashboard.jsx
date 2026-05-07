import MemberLayout from '@/Layouts/MemberLayout';
import { usePage, Link } from '@inertiajs/react';
import BmiCalculator from '@/Components/BmiCalculator';

export default function Dashboard({ favoritePlans = [] }) {
    const { auth } = usePage().props;
    const height = auth.user.height;
    const weight = auth.user.weight;

    let bmi = null;

    if (height && weight) {
        const heightInMeters = height / 100;

        bmi = (
            weight /
            (heightInMeters * heightInMeters)
        ).toFixed(1);
    }

    return (
        <MemberLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Welkom terug, {auth.user.name}
                </h1>

                <p className="mt-2 text-slate-400">
                    Bekijk je trainingsschema's en volg je fitnessdoelen.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
                    <h2 className="text-lg font-semibold mb-3">
                        Membership
                    </h2>

                    <p className="text-green-400 font-semibold">
                        Actief
                    </p>

                    <p className="text-sm text-slate-500 mt-2">
                        Demo membership status.
                    </p>
                </div>

                <div className="text-center rounded-xl bg-slate-900 border border-slate-800 p-6">
                    <BmiCalculator user={auth.user} />
                </div>

                {favoritePlans.length === 0 ? (
                    <div className="text-center rounded-xl bg-slate-900 border border-slate-800 p-6">
                        Nog geen favoriete schema's
                    </div>

                ) : (
                    <div className="text-center rounded-xl bg-slate-900 border border-slate-800 p-6">

                        <h2 className="text-lg font-semibold mb-3">Favoriete schema's</h2>
                        {favoritePlans.map((plan) => (
                            <Link
                                key={plan.id}
                                href={`/member/training-plans/${plan.id}`}
                                className="block rounded-lg bg-slate-950 border border-slate-800 p-3 hover:border-green-400"
                            >
                                <p className="font-semibold">
                                    {plan.title}
                                </p>

                                <p className="text-sm text-slate-400">
                                    {plan.goal}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-8 rounded-xl bg-slate-900 border border-slate-800 p-6">
                <h2 className="text-2xl font-bold mb-4">
                    Trainingsschema's
                </h2>

                <p className="text-slate-400 mb-4">
                    Bekijk alle beschikbare trainingsschema's.
                </p>

                <Link
                    href="/member/training-plans"
                    className="inline-block rounded-lg bg-slate-800 px-4 py-2 text-green-400 hover:bg-slate-700"
                >
                    Naar trainingsschema's
                </Link>
            </div>
        </MemberLayout>
    );
}