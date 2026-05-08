import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Create({ workouts }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        goal: '',
        difficulty: '',
        duration_weeks: '',
        workouts: [],
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
                data.workouts.filter((workout) => Number(workout.id) !== workoutId)
            );
        }
    }

    function updateWorkoutField(id, field, value) {
        setData(
            'workouts',
            data.workouts.map((workout) =>
                workout.id === id
                    ? { ...workout, [field]: value }
                    : workout
            )
        );
    }

    function submit(e) {
        e.preventDefault();
        post('/admin/training-plans');
    }

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Nieuw trainingsschema</h1>

            <Link
                href="/admin/training-plans"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar trainingsschema's
            </Link>

            <form onSubmit={submit} className="max-w-2xl space-y-4">
                <div>
                    <input
                        className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                        type="text"
                        placeholder="Titel"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-400">Titel is verplicht.</p>}
                </div>

                <textarea
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    placeholder="Beschrijving"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
                <div>
                    <input
                        className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                        type="text"
                        placeholder="Doel bv. spiermassa, afvallen, conditie"
                        value={data.goal}
                        onChange={(e) => setData('goal', e.target.value)}
                    />
                    {errors.goal && <p className=" mt-1 text-sm text-red-400">Doel is verplicht.</p>}
                </div>

                <div>
                    <input
                        className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                        type="text"
                        placeholder="Niveau bv. beginner, gemiddeld, gevorderd"
                        value={data.difficulty}
                        onChange={(e) => setData('difficulty', e.target.value)}
                    />
                    {errors.difficulty && <p className="mt-1 text-sm text-red-400">Moeilijkheidsgraad is verplicht</p>}
                </div>

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="number"
                    placeholder="Duur in weken"
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
                                                type="checkbox"
                                                className="mr-5"
                                                checked={!!selectedWorkout}
                                                onChange={(e) =>
                                                    toggleWorkout(workout.id, e.target.checked)
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
                                                    placeholder="Welke dag van het schema? / Dag 1"
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

                <button
                    disabled={processing}
                    className="bg-green-500 text-slate-950 px-4 py-2 rounded-lg font-semibold"
                >
                    Opslaan
                </button>
            </form>
        </AdminLayout >
    );
}