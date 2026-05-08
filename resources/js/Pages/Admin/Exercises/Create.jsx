import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';

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

    return (
        <AdminLayout>
            <h1 className=" text-3xl font-bold">Nieuwe oefening</h1>

            <Link
                href="/admin/exercises"
                className="inline-block mb-6 text-sm text-slate-400 hover:text-green-400"
            >
                ← Terug naar oefeningen
            </Link>

            <form onSubmit={submit}>
                <div>
                    <input
                        className="my-3 w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                        type="text"
                        placeholder="Naam"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <p className='text-sm text-red-400'>Naam is verplicht.</p>}
                </div>

                <div>
                    <input
                        className=" mb-3 w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                        type="text"
                        placeholder="Spiergroep"
                        value={data.muscle_group}
                        onChange={(e) => setData('muscle_group', e.target.value)}
                    />
                    {errors.muscle_group && <p className='text-sm text-red-400'>Spiergroep is verplicht.</p>}
                </div>

                <input
                    className="mb-3 w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    placeholder="Moeilijkheid"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />


                <textarea
                    className="mb-3 w-full rounded-lg bg-slate-900 border border-slate-700 p-3"
                    placeholder="Beschrijving"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />


                <input
                    className="mb-3 w-half rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    placeholder="Image URL"
                    value={data.image}
                    onChange={(e) => setData('image', e.target.value)}
                />


                <input className=" ml-2 mb-3 w-half rounded-lg bg-slate-900 border border-slate-700 p-3"
                    type="text"
                    placeholder="Video URL"
                    value={data.video_url}
                    onChange={(e) => setData('video_url', e.target.value)}
                />


                <br />
                <button className='text-green-400' disabled={processing}>
                    Opslaan
                </button>
            </form>
        </AdminLayout>
    );
}