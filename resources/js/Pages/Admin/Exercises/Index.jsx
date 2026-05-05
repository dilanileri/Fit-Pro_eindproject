import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

export default function Index({ exercises }) {
    return (
        <AdminLayout>
            <div className="flex items-center justify-between mb-6">

                <h1 className=" text-3xl font-bold">Oefeningen</h1>

                <Link href="/admin/exercises/create"
                    className="bg-green-500 text-slate-950 px-4 py-2 rounded-lg font-semibold">
                    Nieuwe oefening
                </Link>
            </div>

            <ul className="grid gap-4">
                {exercises.map((exercise) => (
                    <li key={exercise.id}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-5">

                        <h3 className=" mt-5 text-2xl font-bold">{exercise.name}</h3>
                        <p className="text-slate-400">Spiergroep: {exercise.muscle_group}</p>
                        <p className="text-slate-400">Moeilijkheid: {exercise.difficulty}</p>
                        <p className='mt-2'>Beschrijving: {exercise.description}</p>

                        {exercise.image && (
                            <img src={exercise.image} alt={exercise.name} width="150" />
                        )}

                        {exercise.video_url && (
                            <a href={exercise.video_url} target="_blank">
                                Bekijk video
                            </a>
                        )}

                        <br />

                        <Link className="text-blue-400" href={`/admin/exercises/${exercise.id}/edit`}>
                            Bewerken
                        </Link>
                    </li>
                ))}
            </ul>
        </AdminLayout>
    );
}