import projects from "../data/projects";

function Projects() {
    const featuredProjects = projects.filter((project) => project.featured);
    const standardProjects = projects.filter((project) => !project.featured);

    return (
        <section id="projects" className="bg-[var(--color-surface)] px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <h2
                            className="text-4xl font-extrabold tracking-tight md:text-5xl"
                            style={{ color: "var(--color-heading)" }}
                        >
                            Selected Projects
                        </h2>
                        <p className="mt-4 text-lg" style={{ color: "var(--color-text)" }}>
                            A selection of software, integration, and systems-focused work.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {featuredProjects[0] && (
                        <div className="group md:col-span-8">
                            <div
                                className="relative aspect-video overflow-hidden rounded-xl"
                                style={{ backgroundColor: "var(--color-bg)" }}
                            >
                                <img
                                    src={featuredProjects[0].image}
                                    alt={featuredProjects[0].title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/50 to-transparent p-8 opacity-100 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                                    <div className="text-white">
                                        <h4 className="text-2xl font-bold">
                                            {featuredProjects[0].title}
                                        </h4>
                                        <p className="mt-2 text-sm text-zinc-200">
                                            {featuredProjects[0].description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {featuredProjects[0].tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded bg-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex gap-3">
                                            {featuredProjects[0].github && (
                                                <a
                                                    href={featuredProjects[0].github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                                                >
                                                    View Code
                                                </a>
                                            )}

                                            {featuredProjects[0].live && (
                                                <a
                                                    href={featuredProjects[0].live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center rounded-md border border-white px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {standardProjects[0] && (
                        <div className="group md:col-span-4">
                            <div
                                className="flex h-full flex-col overflow-hidden rounded-xl"
                                style={{ backgroundColor: "var(--color-bg)" }}
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={standardProjects[0].image}
                                        alt={standardProjects[0].title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col p-8">
                                    <h4
                                        className="mb-2 text-xl font-bold"
                                        style={{ color: "var(--color-heading)" }}
                                    >
                                        {standardProjects[0].title}
                                    </h4>

                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: "var(--color-text)" }}
                                    >
                                        {standardProjects[0].description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {standardProjects[0].tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                                                style={{
                                                    backgroundColor: "var(--color-surface)",
                                                    color: "var(--color-text)",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 flex gap-3">
                                        {standardProjects[0].github && (
                                            <a
                                                href={standardProjects[0].github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-80"
                                            >
                                                View Code
                                            </a>
                                        )}

                                        {standardProjects[0].live && (
                                            <a
                                                href={standardProjects[0].live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-80"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {standardProjects[1] && (
                        <div className="group md:col-span-4">
                            <div
                                className="flex h-full flex-col overflow-hidden rounded-xl"
                                style={{ backgroundColor: "var(--color-bg)" }}
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={standardProjects[1].image}
                                        alt={standardProjects[1].title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col p-8">
                                    <h4
                                        className="mb-2 text-xl font-bold"
                                        style={{ color: "var(--color-heading)" }}
                                    >
                                        {standardProjects[1].title}
                                    </h4>

                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: "var(--color-text)" }}
                                    >
                                        {standardProjects[1].description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {standardProjects[1].tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                                                style={{
                                                    backgroundColor: "var(--color-surface)",
                                                    color: "var(--color-text)",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 flex gap-3">
                                        {standardProjects[1].github && (
                                            <a
                                                href={standardProjects[1].github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-80"
                                            >
                                                View Code
                                            </a>
                                        )}

                                        {standardProjects[1].live && (
                                            <a
                                                href={standardProjects[1].live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-80"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {featuredProjects[1] && (
                        <div className="group md:col-span-8">
                            <div
                                className="relative aspect-video overflow-hidden rounded-xl"
                                style={{ backgroundColor: "var(--color-bg)" }}
                            >
                                <img
                                    src={featuredProjects[1].image}
                                    alt={featuredProjects[1].title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-8 opacity-100 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                                    <div className="text-white">
                                        <h4 className="text-2xl font-bold">
                                            {featuredProjects[1].title}
                                        </h4>
                                        <p className="mt-2 text-sm text-zinc-200">
                                            {featuredProjects[1].description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {featuredProjects[1].tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded bg-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex gap-3">
                                            {featuredProjects[1].github && (
                                                <a
                                                    href={featuredProjects[1].github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                                                >
                                                    View Code
                                                </a>
                                            )}

                                            {featuredProjects[1].live && (
                                                <a
                                                    href={featuredProjects[1].live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center rounded-md border border-white px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;