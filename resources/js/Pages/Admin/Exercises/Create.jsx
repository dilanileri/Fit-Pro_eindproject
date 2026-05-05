import { useForm } from '@inertiajs/react';

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
        <div>
            <h1>Nieuwe oefening</h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Naam"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <div>{errors.name}</div>}

                <input
                    type="text"
                    placeholder="Spiergroep"
                    value={data.muscle_group}
                    onChange={(e) => setData('muscle_group', e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Moeilijkheid"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />

                <textarea
                    placeholder="Beschrijving"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    value={data.image}
                    onChange={(e) => setData('image', e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Video URL"
                    value={data.video_url}
                    onChange={(e) => setData('video_url', e.target.value)}
                />

                <button disabled={processing}>
                    Opslaan
                </button>
            </form>
        </div>
    );
}