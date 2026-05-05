import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';

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

            <form className="max-w-xl space-y-4" onSubmit={submit}>
                <input
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <button className='text-green-400'>Opslaan</button>
            </form>

            <button className='text-red-400' onClick={remove}>
                Verwijderen
            </button>
        </AdminLayout>
    );
}