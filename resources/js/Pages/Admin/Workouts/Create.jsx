import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import {
    Activity,
    ArrowLeft,
    Check,
    Clock3,
    Dumbbell,
    Plus,
    Save,
} from 'lucide-react';

export default function Create({ exercises }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        difficulty: '',
        duration_minutes: '',
        image: '',
        exercises: [],
    });

    function submit(e) {
        e.preventDefault();
        post('/admin/workouts');
    }

    function toggleExercise(id, checked) {
        if (checked) {
            setData('exercises', [
                ...data.exercises,
                {
                    id: id,
                    sets: '',
                    reps: '',
                    rest_seconds: '',
                },
            ]);
        } else {
            setData(
                'exercises',
                data.exercises.filter((exercise) => exercise.id !== id)
            );
        }
    }

    function updateExerciseField(id, field, value) {
        setData(
            'exercises',
            data.exercises.map((exercise) =>
                exercise.id === id
                    ? { ...exercise, [field]: value }
                    : exercise
            )
        );
    }

    const inputClass =
        'w-full rounded-2xl border border-slate-700/80 bg-black/30 px-4 py-3 text-white shadow-inner shadow-black/20 outline-none transition placeholder:text-slate-600 focus:border-green-400 focus:bg-slate-950 focus:ring-2 focus:ring-green-400/20';

    return (
        <AdminLayout>
            <section className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 md:p-8">
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/10 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                                <Activity className="h-4 w-4" />
                                Workouts
                            </div>

                            <h1 className="text-3xl font-black text-white">
                                Nieuwe workout
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                                Maak een workout aan en koppel oefeningen met
                                sets, herhalingen en rusttijd.
                            </p>
                        </div>

                        <Link
                            href="/admin/workouts"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-5 py-3 font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Terug
                        </Link>
                    </div>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                                    <Dumbbell className="h-6 w-6 text-sky-400" />
                                </div>

                                <div>
                                    <h2 className="text-xl font-black text-white">
                                        Workout informatie
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Basisgegevens van de workout.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-5">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-400">
                                        Titel
                                    </label>

                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData('title', e.target.value)
                                        }
                                        className={inputClass}
                                        placeholder="Bijv. Push Workout"
                                    />

                                    {errors.title && (
                                        <p className="mt-2 text-sm text-red-400">
                                            Titel is verplicht.
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-400">
                                        Beschrijving
                                    </label>

                                    <textarea
                                        rows="5"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value
                                            )
                                        }
                                        className={`${inputClass} resize-none`}
                                        placeholder="Beschrijving van de workout..."
                                    />
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-400">
                                            Moeilijkheid
                                        </label>

                                        <input
                                            type="text"
                                            value={data.difficulty}
                                            onChange={(e) =>
                                                setData(
                                                    'difficulty',
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass}
                                            placeholder="Bijv. Beginner"
                                        />

                                        {errors.difficulty && (
                                            <p className="mt-2 text-sm text-red-400">
                                                Moeilijkheidsgraad is verplicht.
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-400">
                                            Duur in minuten
                                        </label>

                                        <input
                                            type="number"
                                            value={data.duration_minutes}
                                            onChange={(e) =>
                                                setData(
                                                    'duration_minutes',
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass}
                                            placeholder="Bijv. 45"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="mb-2 block text-sm font-semibold text-slate-300">
                                            Workout afbeelding
                                        </label>

                                        <input
                                            type="text"
                                            value={data.image}
                                            onChange={(e) =>
                                                setData(
                                                    'image',
                                                    e.target.value
                                                )
                                            }
                                            placeholder="https://example.com/workout.jpg"
                                            className={inputClass}
                                        />

                                        {data.image && (
                                            <img
                                                src={data.image}
                                                alt="Workout preview"
                                                className="mt-4 h-56 w-full rounded-3xl object-cover"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8">
                        <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-green-400/5 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                                        <Activity className="h-6 w-6 text-sky-400" />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-black text-white">
                                            Oefeningen koppelen
                                        </h2>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Selecteer oefeningen en vul de
                                            trainingsdetails in.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-full border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300">
                                    {data.exercises.length} geselecteerd
                                </div>
                            </div>

                            {exercises.length === 0 ? (
                                <div className="rounded-2xl border border-dashed border-slate-700 bg-black/20 p-6">
                                    <p className="text-sm text-slate-400">
                                        Er zijn nog geen oefeningen beschikbaar.
                                    </p>

                                    <Link
                                        href="/admin/exercises/create"
                                        className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-green-400"
                                    >
                                        <Plus className="h-5 w-5" />
                                        Maak eerst een oefening aan
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid gap-4">
                                    {exercises.map((exercise) => {
                                        const selectedExercise =
                                            data.exercises.find(
                                                (item) =>
                                                    item.id === exercise.id
                                            );

                                        return (
                                            <div
                                                key={exercise.id}
                                                className={`rounded-3xl border p-4 transition duration-200 ${selectedExercise
                                                        ? 'border-green-400/40 bg-green-500/5'
                                                        : 'border-slate-800 bg-black/20 hover:border-slate-700'
                                                    }`}
                                            >
                                                <label className="flex cursor-pointer items-start gap-4">
                                                    <input
                                                        className="mt-1 h-5 w-5 rounded-md border border-slate-600 bg-slate-900 text-green-500 focus:ring-2 focus:ring-green-400/30"
                                                        type="checkbox"
                                                        value={exercise.id}
                                                        checked={
                                                            !!selectedExercise
                                                        }
                                                        onChange={(e) =>
                                                            toggleExercise(
                                                                Number(
                                                                    e.target
                                                                        .value
                                                                ),
                                                                e.target.checked
                                                            )
                                                        }
                                                    />

                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                            <div>
                                                                <p className="font-bold text-white">
                                                                    {
                                                                        exercise.name
                                                                    }
                                                                </p>

                                                                <p className="mt-1 text-sm text-slate-500">
                                                                    {
                                                                        exercise.muscle_group
                                                                    }
                                                                </p>
                                                            </div>

                                                            {selectedExercise && (
                                                                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                                                                    <Check className="h-3 w-3" />
                                                                    Gekoppeld
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </label>

                                                {selectedExercise && (
                                                    <div className="mt-5 grid gap-3 border-t border-slate-800 pt-5 md:grid-cols-3">
                                                        <div>
                                                            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                                Sets
                                                            </label>

                                                            <input
                                                                type="number"
                                                                placeholder="4"
                                                                value={
                                                                    selectedExercise.sets
                                                                }
                                                                onChange={(e) =>
                                                                    updateExerciseField(
                                                                        exercise.id,
                                                                        'sets',
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                className={
                                                                    inputClass
                                                                }
                                                            />
                                                        </div>

                                                        <div>
                                                            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                                Reps
                                                            </label>

                                                            <input
                                                                type="number"
                                                                placeholder="10"
                                                                value={
                                                                    selectedExercise.reps
                                                                }
                                                                onChange={(e) =>
                                                                    updateExerciseField(
                                                                        exercise.id,
                                                                        'reps',
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                className={
                                                                    inputClass
                                                                }
                                                            />
                                                        </div>

                                                        <div>
                                                            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                                Rust seconden
                                                            </label>

                                                            <input
                                                                type="number"
                                                                placeholder="90"
                                                                value={
                                                                    selectedExercise.rest_seconds
                                                                }
                                                                onChange={(e) =>
                                                                    updateExerciseField(
                                                                        exercise.id,
                                                                        'rest_seconds',
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                className={
                                                                    inputClass
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3 text-sm text-slate-500">
                                    <Clock3 className="h-4 w-4 text-sky-400" />
                                    Vul sets, reps en rusttijd in voor elke
                                    gekoppelde oefening.
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                >
                                    <Save className="h-5 w-5" />

                                    {processing
                                        ? 'Opslaan...'
                                        : 'Workout opslaan'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </AdminLayout>
    );
}