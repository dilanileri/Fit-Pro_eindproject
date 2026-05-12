import { router } from '@inertiajs/react';
import { Heart } from 'lucide-react';

export default function FavoriteButton({
    isFavorite,
    trainingPlanId,
    className = '',
}) {
    function toggleFavorite() {
        if (isFavorite) {
            router.delete(
                `/member/training-plans/${trainingPlanId}/favorite`
            );
        } else {
            router.post(
                `/member/training-plans/${trainingPlanId}/favorite`
            );
        }
    }

    return (
        <button
            type="button"
            onClick={toggleFavorite}
            className={`
                flex h-12 w-12 items-center justify-center
                rounded-2xl border backdrop-blur
                transition hover:-translate-y-0.5
                ${isFavorite
                    ? 'border-green-400/40 bg-green-500/20 text-green-400'
                    : 'border-slate-700 bg-black/40 text-slate-400 hover:border-sky-400/40 hover:text-sky-400'
                }
                ${className}
            `}
        >
            <Heart
                className={`h-5 w-5 ${isFavorite ? 'fill-green-400' : ''
                    }`}
            />
        </button>
    );
}