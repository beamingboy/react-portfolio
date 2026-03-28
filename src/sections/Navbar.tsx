import { useEffect, useState } from "react";
import Button from "../components/Button";
import personal from "../data/personal";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    useEffect(() => {
        const sectionIds = ["hero", "about", "experience", "projects", "skills", "contact"];

        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    root: null,
                    threshold: 0.4,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);
    return (
        <header
            className="sticky top-0 z-50 w-full shadow-sm backdrop-blur-xl"
            style={{
                backgroundColor: "color-mix(in srgb, var(--color-nav) 70%, transparent)",
                borderBottom: "1px solid var(--color-border)",
            }}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
                <div className="text-xl font-bold tracking-tighter text-zinc-900 font-[Manrope]" >
                    <a href="#hero" style={{ color: "var(--color-heading)" }}>{personal.name}</a>
                </div>

                <div className="font-semibold hidden items-center gap-6 text-m font-medium text-[var(--color-text-surface)] sm:flex">
                    <a href="#about" className={`nav-link ${activeSection === "about" ? "nav-link-active" : ""}`}>
                        ABOUT
                    </a>
                    <a href="#experience" className={`nav-link ${activeSection === "experience" ? "nav-link-active" : ""}`}>
                        EXPERIENCE
                    </a>
                    <a href="#projects" className={`nav-link ${activeSection === "projects" ? "nav-link-active" : ""}`}>
                        PROJECTS
                    </a>
                    <a href="#skills" className={`nav-link ${activeSection === "skills" ? "nav-link-active" : ""}`}>
                        SKILLS
                    </a>
                </div>

                <div className="hidden sm:block">
                    <Button text="Contact" href="#contact" />
                </div>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    className="relative flex h-10 w-10 items-center justify-center sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`absolute h-0.5 w-6 bg-zinc-900 transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"
                            }`}
                    />
                    <span
                        className={`absolute h-0.5 w-6 bg-zinc-900 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`absolute h-0.5 w-6 bg-zinc-900 transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"
                            }`}
                    />
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-zinc-200 bg-white px-8 py-4 sm:hidden">
                    <div className="flex flex-col gap-4 text-sm font-medium text-[var(--color-text-surface)]">
                        <div className="font-semibold flex flex-col gap-4 text-sm font-medium text-[var(--color-text-surface)] pl-[2px]">
                            <a
                                href="#about"
                                onClick={() => setIsOpen(false)}
                                className={`nav-link ${activeSection === "about" ? "nav-link-active" : ""}`}
                            >
                                ABOUT
                            </a>
                            <a
                                href="#experience"
                                onClick={() => setIsOpen(false)}
                                className={`nav-link ${activeSection === "experience" ? "nav-link-active" : ""}`}>
                                EXPERIENCE
                            </a>
                            <a
                                href="#projects"
                                onClick={() => setIsOpen(false)}
                                className={`nav-link ${activeSection === "projects" ? "nav-link-active" : ""}`}
                            >
                                PROJECTS
                            </a>
                            <a
                                href="#skills"
                                onClick={() => setIsOpen(false)}
                                className={`nav-link ${activeSection === "skills" ? "nav-link-active" : ""}`}
                            >
                                SKILLS
                            </a>
                        </div>
                        <div>
                            <Button text="Contact" href="#contact" />
                        </div>

                    </div>
                </div>
            )
            }
        </header >
    );
}

export default Navbar;