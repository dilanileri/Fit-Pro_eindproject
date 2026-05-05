import { useForm } from '@inertiajs/react';
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
        if (checked) {
            setData('workouts', [...data.workouts, id]);
        } else {
            setData(
                'workouts',
                data.workouts.filter((workoutId) => workoutId !== id)
            );
        }
    }

    function submit(e) {
        e.preventDefault();
        post('/admin/training-plans');
    }

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Nieuw trainingsschema</h1>

            <form onSubmit={submit} className="max-w-2xl space-y-4">
                <div>
                    <input
                        className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                        type="text"
                        placeholder="Titel"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    {errors.title && <p className="text-red-400">{errors.title}</p>}
                </div>

                <textarea
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    placeholder="Beschrijving"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    placeholder="Doel bv. spiermassa, afvallen, conditie"
                    value={data.goal}
                    onChange={(e) => setData('goal', e.target.value)}
                />
                {errors.goal && <p className="text-red-400">{errors.goal}</p>}

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    placeholder="Niveau bv. beginner, gemiddeld, gevorderd"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />
                {errors.difficulty && <p className="text-red-400">{errors.difficulty}</p>}

                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="number"
                    placeholder="Duur in weken"
                    value={data.duration_weeks}
                    onChange={(e) => setData('duration_weeks', e.target.value)}
                />

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h2 className="text-xl font-bold mb-4">Workouts koppelen</h2>

                    {workouts.map((workout) => (
                        <label key={workout.id} className="block mb-2">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={data.workouts.includes(workout.id)}
                                onChange={(e) =>
                                    toggleWorkout(workout.id, e.target.checked)
                                }
                            />
                            {workout.title} — {workout.difficulty}
                        </label>
                    ))}
                </div>

                <button
                    disabled={processing}
                    className="bg-green-500 text-slate-950 px-4 py-2 rounded-lg font-semibold"
                >
                    Opslaan
                </button>
            </form>
        </AdminLayout>
    );
}