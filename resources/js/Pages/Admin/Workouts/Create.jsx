import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';

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

    function toggleExercise(id, checked) {
        if (checked) {
            setData('exercises', [...data.exercises, id]);
        } else {
            setData(
                'exercises',
                data.exercises.filter((exerciseId) => exerciseId !== id)
            );
        }
    }

    return (
        <AdminLayout>
            <Link
                href="/admin/workouts"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar workouts
            </Link>

            <div className="mb-8">
                <h1 className="text-3xl font-bold">Nieuwe workout</h1>
                <p className="mt-2 text-slate-400">
                    Maak een workout aan en koppel oefeningen.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-6 max-w-3xl">
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Workout informatie</h2>

                    <input
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        type="text"
                        placeholder="Titel"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    {errors.title && (
                        <p className="text-red-400 text-sm">{errors.title}</p>
                    )}

                    <textarea
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        placeholder="Beschrijving"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        rows="4"
                    />

                    <input
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        type="text"
                        placeholder="Moeilijkheid"
                        value={data.difficulty}
                        onChange={(e) => setData('difficulty', e.target.value)}
                    />
                    {errors.difficulty && (
                        <p className="text-red-400 text-sm">{errors.difficulty}</p>
                    )}

                    <input
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 p-3"
                        type="number"
                        placeholder="Duur in minuten"
                        value={data.duration_minutes}
                        onChange={(e) =>
                            setData('duration_minutes', e.target.value)
                        }
                    />
                </div>

                <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Oefeningen koppelen
                    </h2>

                    {exercises.length === 0 ? (
                        <div>
                            <p className="text-slate-400 mb-3">
                                Er zijn nog geen oefeningen beschikbaar.
                            </p>

                            <Link
                                href="/admin/exercises/create"
                                className="text-green-400 hover:text-green-300"
                            >
                                Maak eerst een oefening aan
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {exercises.map((exercise) => (
                                <label
                                    key={exercise.id}
                                    className="flex items-center rounded-lg bg-slate-950 border border-slate-800 p-3 cursor-pointer"
                                >
                                    <input
                                        className="mr-3"
                                        type="checkbox"
                                        value={exercise.id}
                                        checked={data.exercises.includes(exercise.id)}
                                        onChange={(e) =>
                                            toggleExercise(
                                                Number(e.target.value),
                                                e.target.checked
                                            )
                                        }
                                    />

                                    <span>
                                        {exercise.name}
                                        <span className="text-slate-500">
                                            {' '}
                                            — {exercise.muscle_group}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    disabled={processing}
                    className="rounded-lg bg-slate-800 px-5 py-2 text-green-400 hover:bg-slate-700 disabled:opacity-50"
                >
                    Opslaan
                </button>
            </form>
        </AdminLayout>
    );
}