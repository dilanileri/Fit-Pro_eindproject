import { useForm } from '@inertiajs/react';

export default function Edit({ workout }) {
    const { data, setData, put, delete: destroy, processing, errors } = useForm({
        title: workout.title || '',
        description: workout.description || '',
        difficulty: workout.difficulty || '',
        duration_minutes: workout.duration_minutes || '',
    });

    function submit(e) {
        e.preventDefault();
        put(`/admin/workouts/${workout.id}`);
    }

    function remove() {
        if (confirm('Ben je zeker dat je deze workout wil verwijderen?')) {
            destroy(`/admin/workouts/${workout.id}`);
        }
    }

    return (
        <div>
            <h1>Workout bewerken</h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}

                <textarea
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <input
                    type="text"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />
                {errors.difficulty && <div>{errors.difficulty}</div>}

                <input
                    type="number"
                    value={data.duration_minutes}
                    onChange={(e) => setData('duration_minutes', e.target.value)}
                />

                <button disabled={processing}>
                    Opslaan
                </button>
            </form>

            <button onClick={remove}>
                Verwijderen
            </button>
        </div>
    );
}