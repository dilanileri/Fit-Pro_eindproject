import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        difficulty: '',
        duration_minutes: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/admin/workouts');
    }

    return (
        <div>
            <h1>Nieuwe workout</h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Titel"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}

                <textarea
                    placeholder="Beschrijving"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Moeilijkheid"
                    value={data.difficulty}
                    onChange={(e) => setData('difficulty', e.target.value)}
                />
                {errors.difficulty && <div>{errors.difficulty}</div>}

                <input
                    type="number"
                    placeholder="Duur in minuten"
                    value={data.duration_minutes}
                    onChange={(e) => setData('duration_minutes', e.target.value)}
                />

                <button disabled={processing}>
                    Opslaan
                </button>
            </form>
        </div>
    );
}