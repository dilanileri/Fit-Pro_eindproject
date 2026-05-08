import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Edit({ plan, workouts }) {
    const { data, setData, put, delete: destroy, processing, errors } = useForm({
        title: plan.title || '',
        description: plan.description || '',
        goal: plan.goal || '',
        difficulty: plan.difficulty || '',
        duration_weeks: plan.duration_weeks || '',
        workouts: plan.workouts.map((workout) => ({
            id: workout.id,
            day_name: workout.pivot?.day_name || '',
        }))
    });

    function toggleWorkout(id, checked) {
        const workoutId = Number(id);

        if (checked) {
            setData('workouts', [
                ...data.workouts,
                {
                    id: workoutId,
                    day_name: '',
                },
            ]);
        } else {
            setData(
                'workouts',
                data.workouts.filter(
                    (workout) => Number(workout.id) !== workoutId
                )
            );
        }
    }

    function updateWorkoutField(id, field, value) {
        const workoutId = Number(id);

        setData(
            'workouts',
            data.workouts.map((workout) =>
                Number(workout.id) === workoutId
                    ? { ...workout, [field]: value }
                    : workout
            )
        );
    }

    function submit(e) {
        e.preventDefault();
        put(`/admin/training-plans/${plan.id}`);
    }

    function remove() {
        if (confirm('Ben je zeker dat je dit trainingsschema wil verwijderen?')) {
            destroy(`/admin/training-plans/${plan.id}`);
        }
    }

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Trainingsschema bewerken</h1>

            <Link
                href="/admin/training-plans"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar trainingsschema's
            </Link>

            <form onSubmit={submit} className="max-w-2xl space-y-4">
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <p className="text-red-400">{errors.title}</p>}

                <textarea
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    value={data.goal}
                    onChange={(e) => setData('goal', e.target.value)}
                />

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="number"
                    value={data.duration_weeks}
                    onChange={(e) => setData('duration_weeks', e.target.value)}
                />

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h2 className="text-xl font-bold mb-4">Workouts koppelen</h2>


                    {workouts.length === 0 ? (
                        <div>
                            <p className="text-slate-400 mb-3">
                                Er zijn nog geen workouts beschikbaar.
                            </p>

                            <Link
                                href="/admin/workouts/create"
                                className="text-green-400 hover:text-green-300"
                            >
                                Maak eerst een workout aan
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {workouts.map((workout) => {
                                const selectedWorkout = data.workouts.find(
                                    (item) => Number(item.id) === Number(workout.id)
                                );

                                return (
                                    <div
                                        key={workout.id}
                                        className="rounded-lg bg-slate-950 border border-slate-800 p-3"
                                    >
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                className="mr-3"
                                                type="checkbox"
                                                checked={!!selectedWorkout}
                                                onChange={(e) =>
                                                    toggleWorkout(
                                                        workout.id,
                                                        e.target.checked
                                                    )
                                                }
                                            />

                                            <span>
                                                {workout.title}
                                                <span className="text-slate-500">
                                                    {' '}— {workout.difficulty}
                                                </span>
                                            </span>
                                        </label>

                                        {selectedWorkout && (
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Bijv. Dag 1 - Push Day"
                                                    value={selectedWorkout.day_name}
                                                    onChange={(e) =>
                                                        updateWorkoutField(
                                                            workout.id,
                                                            'day_name',
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-2"
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className="flex gap-3">
                    <button
                        disabled={processing}
                        className="bg-green-500 text-slate-950 px-4 py-2 rounded-lg font-semibold"
                    >
                        Opslaan
                    </button>

                    <button
                        type="button"
                        onClick={remove}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                        Verwijderen
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}