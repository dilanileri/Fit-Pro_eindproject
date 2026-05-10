import { Link } from '@inertiajs/react';

export default function CheckoutLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/Logo_darktheme.png"
                            alt="Fit-Pro logo"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>

                    <p className="text-sm font-semibold text-slate-500">
                        checkout
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-6 py-10">
                {children}
            </main>
        </div>
    );
}