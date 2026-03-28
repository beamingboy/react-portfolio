function About() {
    return (
        <section
            id="about"
            className="bg-[var(--color-surface)] px-8 py-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 md:grid-cols-2 md:gap-24">

                    {/* LEFT SIDE */}
                    <div className="md:sticky md:top-32">
                        <h2
                            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
                            style={{ color: "var(--color-heading)" }}
                        >
                            Building solutions with <br /> clarity & impact.
                        </h2>

                        <div className="mb-6 h-1 w-16 bg-[var(--color-primary)]"></div>

                        <p
                            className="mb-4 text-lg leading-relaxed"
                            style={{ color: "var(--color-text)" }}
                        >
                            I focus on developing scalable applications, integrating systems,
                            and automating workflows that improve business efficiency and
                            reduce manual effort.
                        </p>

                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: "var(--color-text)" }}
                        >
                            My experience spans across software development, APIs, and
                            business systems, allowing me to bridge the gap between technical
                            complexity and practical solutions.
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-10">

                        {/* CARDS */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                            <div
                                className="rounded-xl p-6 shadow-sm transition hover:shadow-md"
                                style={{ backgroundColor: "var(--color-bg)" }}
                            >
                                <h3
                                    className="mb-2 text-lg font-bold"
                                    style={{ color: "var(--color-heading)" }}
                                >
                                    System Integration
                                </h3>
                                <p
                                    className="text-sm"
                                    style={{ color: "var(--color-text)" }}
                                >
                                    Connecting platforms, APIs, and services to create seamless
                                    workflows.
                                </p>
                            </div>

                            <div
                                className="rounded-xl p-6 shadow-sm transition hover:shadow-md"
                                style={{ backgroundColor: "var(--color-bg)" }}
                            >
                                <h3
                                    className="mb-2 text-lg font-bold"
                                    style={{ color: "var(--color-heading)" }}
                                >
                                    Application Development
                                </h3>
                                <p
                                    className="text-sm"
                                    style={{ color: "var(--color-text)" }}
                                >
                                    Building scalable web applications using modern frameworks
                                    and clean architecture.
                                </p>
                            </div>

                        </div>

                        {/* IMAGE / VISUAL */}
                        <div
                            className="overflow-hidden rounded-xl shadow-sm"
                            style={{ backgroundColor: "var(--color-bg)" }}
                        >
                            <img
                                src="/images/aboutPicture.jpeg"
                                alt="Workspace"
                                className="h-full w-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;