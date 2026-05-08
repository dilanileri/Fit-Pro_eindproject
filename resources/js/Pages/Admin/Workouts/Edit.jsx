import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Edit({ workout, exercises }) {
    const { data, setData, put, delete: destroy, processing, errors } = useForm({
        title: workout.title || '',
        description: workout.description || '',
        difficulty: workout.difficulty || '',
        duration_minutes: workout.duration_minutes || '',
        exercises: workout.exercises.map((exercise) => ({
            id: exercise.id,
            sets: exercise.pivot?.sets || '',
            reps: exercise.pivot?.reps || '',
            rest_seconds: exercise.pivot?.rest_seconds || '',
        }))
    });

    function toggleExercise(id, checked) {
        const exerciseId = Number(id);

        if (checked) {
            setData('exercises', [
                ...data.exercises,
                {
                    id: exerciseId,
                    sets: '',
                    reps: '',
                    rest_seconds: '',
                },
            ]);
        } else {
            setData(
                'exercises',
                data.exercises.filter(
                    (exercise) => Number(exercise.id) !== exerciseId
                )
            );
        }
    }

    function updateExerciseField(id, field, value) {
        const exerciseId = Number(id);

        setData(
            'exercises',
            data.exercises.map((exercise) =>
                Number(exercise.id) === exerciseId
                    ? { ...exercise, [field]: value }
                    : exercise
            )
        );
    }

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

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h2 className="text-2xl font-bold mb-6">Oefeningen koppelen</h2>

                    {exercises.length === 0 ? (
                        <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
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
                            {exercises.map((exercise) => {
                                const selectedExercise = data.exercises.find(
                                    (item) => Number(item.id) === Number(exercise.id)
                                );

                                return (
                                    <div
                                        key={exercise.id}
                                        className="rounded-lg bg-slate-950 border border-slate-800 p-3"
                                    >
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                className="mr-3"
                                                type="checkbox"
                                                value={exercise.id}
                                                checked={!!selectedExercise}
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

                                        {selectedExercise && (
                                            <div className="mt-4 grid gap-3 md:grid-cols-3">
                                                <input
                                                    type="number"
                                                    placeholder="Sets"
                                                    value={selectedExercise.sets}
                                                    onChange={(e) =>
                                                        updateExerciseField(
                                                            exercise.id,
                                                            'sets',
                                                            e.target.value
                                                        )
                                                    }
                                                    className="rounded-lg bg-slate-900 border border-slate-700 p-2"
                                                />

                                                <input
                                                    type="number"
                                                    placeholder="Reps"
                                                    value={selectedExercise.reps}
                                                    onChange={(e) =>
                                                        updateExerciseField(
                                                            exercise.id,
                                                            'reps',
                                                            e.target.value
                                                        )
                                                    }
                                                    className="rounded-lg bg-slate-900 border border-slate-700 p-2"
                                                />

                                                <input
                                                    type="number"
                                                    placeholder="Rust seconden"
                                                    value={selectedExercise.rest_seconds}
                                                    onChange={(e) =>
                                                        updateExerciseField(
                                                            exercise.id,
                                                            'rest_seconds',
                                                            e.target.value
                                                        )
                                                    }
                                                    className="rounded-lg bg-slate-900 border border-slate-700 p-2"
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

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