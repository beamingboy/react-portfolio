import skills from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="bg-[var(--color-bg)] px-8 py-24">
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-16 text-center">
                    <h2
                        className="text-4xl font-bold tracking-tight md:text-5xl"
                        style={{ color: "var(--color-heading)" }}
                    >
                        Skills & Technologies
                    </h2>
                    <p
                        className="mt-4 text-lg"
                        style={{ color: "var(--color-text)" }}
                    >
                        A comprehensive overview of tools and technologies I work with.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-md"
                            style={{ backgroundColor: "var(--color-surface)" }}
                        >
                            {/* CATEGORY */}
                            <h3
                                className="mb-4 text-lg font-bold"
                                style={{ color: "var(--color-heading)" }}
                            >
                                {skill.category}
                            </h3>

                            {/* ITEMS */}
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full px-3 py-1 text-xs font-semibold transition"
                                        style={{
                                            backgroundColor: "var(--color-bg)",
                                            color: "var(--color-text)",
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;