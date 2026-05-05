import { Link } from '@inertiajs/react';

export default function Index({ workouts }) {
    return (
        <div>
            <h1>Workouts</h1>

            <Link href="/admin/workouts/create">
                Nieuwe workout
            </Link>

            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>
                        <h3>{workout.title}</h3>
                        <p>Moeilijkheid: {workout.difficulty}</p>
                        <p>Duur: {workout.duration_minutes} minuten</p>
                        <p>{workout.description}</p>

                        <Link href={`/admin/workouts/${workout.id}/edit`}>
                            Bewerken
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}