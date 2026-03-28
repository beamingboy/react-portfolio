import experience from "../data/experience";

function Experience() {
    return (
        <section
            id="experience"
            className="bg-[var(--color-bg)] px-8 py-24"
        >
            <div className="mx-auto max-w-7xl">

                <h2
                    className="mb-16 text-center text-4xl font-bold tracking-tight"
                    style={{ color: "var(--color-heading)" }}
                >
                    Journey & Expertise
                </h2>

                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-start justify-between rounded-xl p-6 transition md:flex-row md:items-center"
                            style={{
                                backgroundColor: "var(--color-surface)",
                            }}
                        >
                            {/* LEFT */}
                            <div className="md:w-2/5">
                                <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
                                    {exp.period}
                                </span>

                                <h3
                                    className="mt-2 text-xl font-bold md:text-2xl"
                                    style={{ color: "var(--color-heading)" }}
                                >
                                    {exp.role}
                                </h3>

                                <p style={{ color: "var(--color-text)" }}>
                                    {exp.company}
                                </p>
                            </div>

                            {/* RIGHT */}
                            <div className="mt-4 md:mt-0 md:w-3/5 md:text-right">
                                <p style={{ color: "var(--color-text)" }}>
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Experience;