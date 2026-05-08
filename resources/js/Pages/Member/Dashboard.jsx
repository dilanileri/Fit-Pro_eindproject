import MemberLayout from '@/Layouts/MemberLayout';
import { usePage, Link } from '@inertiajs/react';
import BmiCalculator from '@/Components/BmiCalculator';
import {
    BadgeCheck,
    Calculator,
    Heart,
    ClipboardList,
    ArrowRight,
} from 'lucide-react';

export default function Dashboard({ favoritePlans = [] }) {
    const { auth } = usePage().props;
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
                    <div className="flex items-center gap-3 mb-4">
                        <BadgeCheck className="h-7 w-7 text-yellow-400" />

                        <h2 className="text-lg font-semibold">
                            Membership
                        </h2>
                    </div>

                    <p className="text-2xl font-bold text-green-400">
                        Actief
                    </p>

                    <p className="text-sm text-slate-500 mt-2">
                        Je hebt toegang tot alle trainingsschema’s.
                    </p>
                </div>

                <div className="text-center rounded-xl bg-slate-900 border border-slate-800 p-6">
                    <BmiCalculator user={auth.user} />
                </div>

                <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Heart className="h-7 w-7 text-green-400" />

                        <h2 className="text-lg font-semibold">
                            Favoriete schema's
                        </h2>
                    </div>

                    {favoritePlans.length === 0 ? (
                        <p className="text-sm text-slate-400">
                            Je hebt nog geen favoriete schema's toegevoegd.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {favoritePlans.map((plan) => (
                                <Link
                                    key={plan.id}
                                    href={`/member/training-plans/${plan.id}`}
                                    className="block rounded-lg bg-slate-950 border border-slate-800 p-3 hover:border-green-400 transition"
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
                {/* 
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
                )} */}
            </div>


            <div className="mt-8 rounded-xl bg-slate-900 border border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <ClipboardList className="h-8 w-8 text-green-400" />

                    <h2 className="text-2xl font-bold">
                        Trainingsschema's
                    </h2>
                </div>

                <p className="text-slate-400 mb-4">
                    Bekijk alle beschikbare trainingsschema's en kies een schema dat past bij jouw doel.
                </p>

                <Link
                    href="/member/training-plans"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 font-semibold text-slate-950 hover:bg-green-400"
                >
                    Naar trainingsschema's
                    <ArrowRight className="h-4 w-4 " />
                </Link>
            </div>

            {/* <div className="mt-8 rounded-xl bg-slate-900 border border-slate-800 p-6">
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
            </div> */}
        </MemberLayout >
    );
}