export default function FooterLayout() {
    return (
        <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950/80 px-6 py-8 backdrop-blur">
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-green-500/5 blur-3xl"></div>
            <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-sky-400/5 blur-3xl"></div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="bg-gradient-to-r from-green-400 to-sky-400 bg-clip-text text-2xl font-black tracking-tight text-transparent">
                        Fit-Pro
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Train slimmer. Word sterker.
                    </p>
                </div>

                <div className="text-sm text-slate-600 md:text-right">
                    <p>© 2026 Fit-Pro</p>

                    <p className="mt-1">
                        Built with Laravel, React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}