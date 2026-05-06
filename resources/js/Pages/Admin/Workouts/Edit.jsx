import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Edit({ workout, exercises }) {
    const { data, setData, put, delete: destroy, processing, errors } = useForm({
        title: workout.title || '',
        description: workout.description || '',
        difficulty: workout.difficulty || '',
        duration_minutes: workout.duration_minutes || '',
        exercises: workout.exercises.map((exercise) => exercise.id)
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
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Workout bewerken</h1>

            <Link
                href="/admin/workouts"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar workouts
            </Link>

            <form className="max-w-xl space-y-4" onSubmit={submit}>
                <h3>Titel:</h3>
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}
                <h3>Beschrijving:</h3>
                <textarea
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <h3>Moeilijkheidsgraad:</h3>
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />
                {errors.difficulty && <div>{errors.difficulty}</div>}

                <h3>trainingsduur:</h3>
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="number"
                    value={data.duration_minutes}
                    onChange={(e) => setData('duration_minutes', e.target.value)}
                />

                <h2 className="text-2xl font-bold mb-6">Oefeningen koppelen</h2>

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


                <button className='text-green-400' disabled={processing}>
                    Opslaan
                </button>
            </form>

            <button className='text-red-400' onClick={remove}>
                Verwijderen
            </button>
        </AdminLayout >
    );
}