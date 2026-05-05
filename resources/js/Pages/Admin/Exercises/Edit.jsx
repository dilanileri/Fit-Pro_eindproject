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
        <div>
            <h1>Oefening bewerken</h1>

            <form onSubmit={submit}>
                <input
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <button>Opslaan</button>
            </form>

            <button onClick={remove}>
                Verwijderen
            </button>
        </div>
    );
}