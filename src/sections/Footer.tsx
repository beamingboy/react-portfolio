import socialLinks from "../data/socialLinks";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="border-t px-8 py-6"
            style={{
                backgroundColor: "var(--color-bg)",
                borderColor: "var(--color-surface)",
            }}
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
                <p
                    className="text-sm"
                    style={{ color: "var(--color-text)" }}
                >
                    © {currentYear} Vinay Kumar. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    {socialLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.name}
                                title={item.name}
                                className="transition duration-200 hover:-translate-y-[2px] hover:scale-110"
                                style={{ color: "var(--color-text)" }}
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

export default Footer;