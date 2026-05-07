import { Link } from '@inertiajs/react';
import MemberLayout from '@/Layouts/MemberLayout';

export default function Index({ trainingPlans }) {
    return (
        <MemberLayout>
            <h1 className="text-3xl font-bold mb-8">
                Trainingsschema's
            </h1>


            <div className="grid gap-6 md:grid-cols-2">
                {trainingPlans.map((plan) => (
                    <Link
                        key={plan.id}
                        href={`/member/training-plans/${plan.id}`}
                        className="rounded-xl bg-slate-900 border border-slate-800 p-6 hover:border-green-400 transition"
                    >
                        <h2 className="text-2xl font-bold mb-2">
                            {plan.title}
                        </h2>

                        <p className="text-slate-400 mb-4">
                            {plan.description}
                        </p>

                        <div className="space-y-1 text-sm text-slate-300">
                            <p>Doel: {plan.goal}</p>
                            <p>Niveau: {plan.difficulty}</p>
                            <p>Duur: {plan.duration_weeks} weken</p>
                        </div>
                    </Link>
                ))}
            </div>
        </MemberLayout>
    );
}