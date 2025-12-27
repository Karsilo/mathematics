import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col justify-center items-center px-4 py-12">
            <div className="max-w-4xl w-full">
                <h1 className="mb-4 text-4xl font-bold text-center">Mathematics</h1>
                <p className="text-fd-muted-foreground text-center mb-12">
                    Explore comprehensive mathematics documentation
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        href="/fundamental"
                        className="group p-6 border rounded-lg hover:border-fd-primary hover:shadow-lg transition-all"
                    >
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-fd-primary transition-colors">
                            Fundamental Mathematics
                        </h2>
                        <p className="text-fd-muted-foreground">
                            Core mathematical concepts and principles including basic arithmetic, algebra, geometry, and introduction to calculus.
                        </p>
                    </Link>

                    <Link
                        href="/advanced"
                        className="group p-6 border rounded-lg hover:border-fd-primary hover:shadow-lg transition-all"
                    >
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-fd-primary transition-colors">
                            Advanced Mathematics
                        </h2>
                        <p className="text-fd-muted-foreground">
                            Advanced mathematical theories including complex analysis, ODEs, Fourier series, and more.
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
