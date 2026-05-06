import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Edit({ exercise }) {
    const { data, setData, put, delete: destroy } = useForm({
        name: exercise.name || '',
        muscle_group: exercise.muscle_group || '',
        difficulty: exercise.difficulty || '',
        description: exercise.description || '',
        image: exercise.image || '',
        video_url: exercise.video_url || '',
    });

    function submit(e) {
        e.preventDefault();
        put(`/admin/exercises/${exercise.id}`);
    }

    function remove() {
        destroy(`/admin/exercises/${exercise.id}`);
    }

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Oefening bewerken</h1>

            <Link
                href="/admin/exercises"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar oefeningen
            </Link>

            <form className="max-w-xl space-y-4" onSubmit={submit}>
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.muscle_group}
                    onChange={(e) => setData('muscle_group', e.target.value)}
                    placeholder="Spiergroep"
                />
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                    placeholder="Moeilijkheid"
                />
                <textarea
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    placeholder="Beschrijving"
                    rows="4"
                />
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.image}
                    onChange={(e) => setData('image', e.target.value)}
                    placeholder="Afbeelding URL"
                />
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.video_url}
                    onChange={(e) => setData('video_url', e.target.value)}
                    placeholder="Video URL"
                />

                <button className='text-green-400'>Opslaan</button>
            </form>

            <button className='text-red-400' onClick={remove}>
                Verwijderen
            </button>
        </AdminLayout>
    );
}