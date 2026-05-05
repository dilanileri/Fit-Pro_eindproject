import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';

export default function Create({ exercises }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        difficulty: '',
        duration_minutes: '',
        exercises: [],
    });

    function submit(e) {
        e.preventDefault();
        post('/admin/workouts');
    }

    return (
        <AdminLayout>
            <h1>Nieuwe workout</h1>

            <form onSubmit={submit}>
                <input
                    className="mr-5 rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    placeholder="Titel"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}

                <textarea
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    placeholder="Beschrijving"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    placeholder="Moeilijkheid"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />
                {errors.difficulty && <div>{errors.difficulty}</div>}

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="number"
                    placeholder="Duur in minuten"
                    value={data.duration_minutes}
                    onChange={(e) => setData('duration_minutes', e.target.value)}
                />

                <h2>Oefeningen koppelen</h2>

                {exercises.map((exercise) => (
                    <label key={exercise.id} style={{ display: 'block' }}>
                        <input
                            className="mr-5 rounded-lg bg-slate-900 border border-slate-700 p-3"
                            type="checkbox"
                            value={exercise.id}
                            checked={data.exercises.includes(exercise.id)}
                            onChange={(e) => {
                                const id = Number(e.target.value);

                                if (e.target.checked) {
                                    setData('exercises', [...data.exercises, id]);
                                } else {
                                    setData(
                                        'exercises',
                                        data.exercises.filter((exerciseId) => exerciseId !== id)
                                    );
                                }
                            }}
                        />

                        {exercise.name} — {exercise.muscle_group}
                    </label>
                ))}

                <button disabled={processing}>
                    Opslaan
                </button>
            </form>
        </AdminLayout>
    );
}