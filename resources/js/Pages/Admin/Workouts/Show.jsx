import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

export default function Show({ workout }) {
    return (
        <AdminLayout>
            <Link className="inline-block bg-green-500 text-slate-950 px-4 py-2 rounded-lg font-semibold mb-6"
                href="/admin/workouts">Terug naar workouts</Link>

            <h1 className="text-3xl font-bold mb-6">{workout.title}</h1>

            <p>Moeilijkheid: {workout.difficulty}</p>
            <p>Duur: {workout.duration_minutes} minuten</p>
            <p>{workout.description}</p>

            <h2 className="text-2xl font-bold m-6">Oefeningen</h2>

            {
                workout.exercises.length === 0 ? (
                    <p>Er zijn nog geen oefeningen gekoppeld.</p>
                ) : (
                    <ul>
                        {workout.exercises.map((exercise) => (
                            <li key={exercise.id}>
                                <strong>{exercise.name}</strong> — {exercise.muscle_group}
                            </li>
                        ))}
                    </ul>
                )
            }
        </AdminLayout >
    );
}