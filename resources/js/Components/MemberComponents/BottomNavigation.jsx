import { router } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function BottomNavigation() {
    return (
        <div className="flex justify-center pt-4 md:pt-6">
            <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-3 text-sm font-bold text-slate-300 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-green-400/40 hover:bg-slate-900 hover:text-green-400"
            >
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                Vorige pagina
            </button>
        </div>
    );
}