import personal from "../data/personal";
import Button from "../components/Button";

function Hero() {
    // const startYear = 2023;
    // const currentYear = new Date().getFullYear();
    // const experienceYears = currentYear - startYear;
    return (
        <section
            id="hero"
            className="flex min-h-screen items-center bg-[var(--color-bg)] pt-2"
        >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-8 py-20 md:grid-cols-12">
                {/* Left Content */}
                <div className="md:col-span-8">
                    <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary-button)]">
                        {personal.title}
                    </span>

                    <h1
                        className="mb-8 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl"
                        style={{ color: "var(--color-heading)" }}
                    >
                        Building{" "}
                        <span className="italic text-[var(--color-primary)]">Digital</span>{" "}
                        Solutions That Scale.
                    </h1>

                    <p
                        className="mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
                        style={{ color: "var(--color-text)" }}
                    >
                        {personal.bio}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button text="View Journey" href="#experience" />

                        <a
                            href="#about"
                            className="rounded-md border px-8 py-4 text-m font-bold transition-all hover:opacity-80"
                            style={{
                                borderColor: "var(--color-primary)",
                                color: "var(--color-heading)",
                                backgroundColor: "transparent",
                            }}
                        >
                            About Me
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative md:col-span-4">
                    <div
                        className="aspect-[4/5] overflow-hidden rounded-xl"
                        style={{ backgroundColor: "var(--color-surface)" }}
                    >
                        <img
                            src="/images/profilePicture.png"
                            alt={personal.name}
                            className="h-full w-full object-cover grayscale transition-[filter] duration-1000 ease-out hover:grayscale-0"
                        />
                    </div>

                    <div
                        className="absolute -bottom-6 -left-6 max-w-[220px] rounded-lg p-6 shadow-xl"
                        style={{ backgroundColor: "var(--color-surface)" }}
                    >
                        <p className="text-3xl font-bold text-[var(--color-primary)]">
                            40%
                        </p>
                        <p
                            className="mt-1 text-xs uppercase tracking-widest"
                            style={{ color: "var(--color-text)" }}
                        >
                            Process Automation Achieved
                        </p>
                        {/* <p className="text-3xl font-bold text-[var(--color-primary)]">
                            {experienceYears}+
                        </p>
                        <p
                            className="mt-1 text-xs uppercase tracking-widest"
                            style={{ color: "var(--color-text)" }}
                        >
                            Years of software and integration experience
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;