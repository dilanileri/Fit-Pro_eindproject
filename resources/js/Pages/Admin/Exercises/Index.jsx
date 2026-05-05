import { Link } from '@inertiajs/react';

export default function Index({ exercises }) {
    return (
        <div>
            <h1>Oefeningen</h1>

            <Link href="/admin/exercises/create">
                Nieuwe oefening
            </Link>

            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <h3>{exercise.name}</h3>
                        <p>Spiergroep: {exercise.muscle_group}</p>
                        <p>Moeilijkheid: {exercise.difficulty}</p>
                        <p>{exercise.description}</p>

                        {exercise.image && (
                            <img src={exercise.image} alt={exercise.name} width="150" />
                        )}

                        {exercise.video_url && (
                            <a href={exercise.video_url} target="_blank">
                                Bekijk video
                            </a>
                        )}

                        <br />

                        <Link href={`/admin/exercises/${exercise.id}/edit`}>
                            Bewerken
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}