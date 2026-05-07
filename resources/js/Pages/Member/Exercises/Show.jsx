import MemberLayout from '@/Layouts/MemberLayout';
import { Link } from '@inertiajs/react';

export default function Show({ exercise }) {
    return (
        <MemberLayout>
            <Link
                href="/member/training-plans"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar trainingsschema's
            </Link>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
                <h1 className="text-3xl font-bold mb-4">
                    {exercise.name}
                </h1>

                <p className="text-slate-400 mb-2">
                    Spiergroep: {exercise.muscle_group}
                </p>

                <p className="text-slate-400 mb-2">
                    Moeilijkheid: {exercise.difficulty}
                </p>

                <p className="mt-4">
                    {exercise.description}
                </p>

                {exercise.image && (
                    <img
                        src={exercise.image}
                        alt={exercise.name}
                        className="mt-6 max-w-md rounded-xl"
                    />
                )}

                {exercise.video_url && (
                    <a
                        href={exercise.video_url}
                        target="_blank"
                        className="inline-block mt-6 text-green-400 hover:text-green-300"
                    >
                        Bekijk video
                    </a>
                )}
            </div>
        </MemberLayout>
    );
}