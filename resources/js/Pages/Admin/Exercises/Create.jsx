import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Dumbbell, Plus } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        muscle_group: '',
        difficulty: '',
        description: '',
        image: '',
        video_url: '',
    });

    function submit(e) {
        e.preventDefault();

        post('/admin/exercises');
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
                                <Dumbbell className="h-4 w-4" />
                                Oefeningen
                            </div>

                            <h1 className="text-3xl font-black text-white">
                                Nieuwe oefening
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                                Voeg een nieuwe oefening toe met spiergroep,
                                moeilijkheid, beschrijving en optionele media.
                            </p>
                        </div>

                        <Link
                            href="/admin/exercises"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-5 py-3 font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Terug
                        </Link>
                    </div>
                </div>

                <form
                    onSubmit={submit}
                    className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-black/40 md:p-8"
                >
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"></div>
                    <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-green-400/5 blur-3xl"></div>

                    <div className="relative z-10 grid gap-5">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-400">
                                Naam
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                className={inputClass}
                                placeholder="Bijv. Bench Press"
                            />

                            {errors.name && (
                                <p className="mt-2 text-sm text-red-400">
                                    Naam is verplicht.
                                </p>
                            )}
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-400">
                                    Spiergroep
                                </label>

                                <input
                                    type="text"
                                    value={data.muscle_group}
                                    onChange={(e) =>
                                        setData(
                                            'muscle_group',
                                            e.target.value
                                        )
                                    }
                                    className={inputClass}
                                    placeholder="Bijv. Borst"
                                />

                                {errors.muscle_group && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Spiergroep is verplicht.
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-400">
                                    Moeilijkheid
                                </label>

                                <input
                                    type="text"
                                    value={data.difficulty}
                                    onChange={(e) =>
                                        setData('difficulty', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="Bijv. Beginner"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-400">
                                Beschrijving
                            </label>

                            <textarea
                                rows="6"
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className={`${inputClass} resize-none`}
                                placeholder="Beschrijving van de oefening..."
                            />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-400">
                                    Afbeelding URL
                                </label>

                                <input
                                    type="text"
                                    value={data.image}
                                    onChange={(e) =>
                                        setData('image', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="https://..."
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-400">
                                    Video URL
                                </label>

                                <input
                                    type="text"
                                    value={data.video_url}
                                    onChange={(e) =>
                                        setData('video_url', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="https://youtube.com/..."
                                />
                            </div>
                        </div>

                        <div className="mt-3 flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-slate-500">
                                Velden voor afbeelding en video zijn optioneel.
                            </p>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                <Plus className="h-5 w-5" />

                                {processing
                                    ? 'Opslaan...'
                                    : 'Oefening opslaan'}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </AdminLayout>
    );
}