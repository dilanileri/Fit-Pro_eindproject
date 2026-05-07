import { Link } from '@inertiajs/react';

export default function BmiSummary({ user }) {
    const height = Number(user.height);
    const weight = Number(user.weight);

    let bmi = null;
    let status = null;

    if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        if (bmi < 18.5) status = 'Ondergewicht';
        else if (bmi < 25) status = 'Gezond gewicht';
        else if (bmi < 30) status = 'Overgewicht';
        else status = 'Obesitas';
    }

    return (
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-lg font-semibold mb-3">BMI</h2>

            {bmi ? (
                <>
                    <p className="text-3xl font-bold text-green-400">{bmi}</p>
                    <p className="mt-2 text-slate-400">Status: {status}</p>
                </>
            ) : (
                <>
                    <p className="text-slate-400 mb-3">
                        Vul je lengte en gewicht in om je BMI te berekenen.
                    </p>

                    <Link
                        href="/member/profile"
                        className="text-green-400 hover:text-green-300"
                    >
                        Gegevens invullen
                    </Link>
                </>
            )}
        </div>
    );
}