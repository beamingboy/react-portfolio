import personal from "../data/personal";

function Contact() {
    return (
        <section id="contact" className="bg-[var(--color-surface)] px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 md:grid-cols-2 md:gap-24">
                    {/* LEFT */}
                    <div>
                        <h2
                            className="mb-8 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
                            style={{ color: "var(--color-heading)" }}
                        >
                            Let’s build something{" "}
                            <span className="text-[var(--color-primary)]">meaningful</span>.
                        </h2>

                        <p
                            className="mb-10 text-lg"
                            style={{ color: "var(--color-text)" }}
                        >
                            I’m open to opportunities across software engineering, systems,
                            integrations, and technology-focused roles.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full"
                                    style={{ backgroundColor: "var(--color-bg)" }}
                                >
                                    <span className="text-xl text-[var(--color-primary)]">✉</span>
                                </div>

                                <a
                                    href={`mailto:${personal.email}`}
                                    className="text-lg font-semibold"
                                    style={{ color: "var(--color-heading)" }}
                                >
                                    {personal.email}
                                </a>
                            </div>

                            {/* <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full"
                                    style={{ backgroundColor: "var(--color-bg)" }}
                                >
                                    <span className="text-xl text-[var(--color-primary)]">⌖</span>
                                </div>

                                <span
                                    className="text-lg font-semibold"
                                    style={{ color: "var(--color-heading)" }}
                                >
                                    {personal.location}
                                </span>
                            </div> */}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="overflow-hidden rounded-xl p-4 shadow-sm"
                        style={{ backgroundColor: "var(--color-bg)" }}
                    >
                        <iframe
                            src="https://forms.zohopublic.com.au/asrcivilptyltd1/form/ContactMe/formperma/SqFzh2yD02wOajwFDL9V_VENqhtydF7P_IHpJu5sqSo"
                            title="Contact Form"
                            className="min-h-[620px] w-full rounded-lg border-0"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;