type SocialLink = {
    id: number;
    name: string;
    link: string;
    icon: () => React.JSX.Element;
};

const socialLinks: SocialLink[] = [
    {
        id: 1,
        name: "GitHub",
        link: "https://github.com/beamingboy",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.85 10.96.57.1.78-.25.78-.55v-2.15c-3.19.7-3.87-1.38-3.87-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.96 10.96 0 0 1 5.8 0c2.21-1.5 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.09 0 4.39-2.69 5.35-5.25 5.64.41.35.77 1.03.77 2.08v3.09c0 .3.21.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
        ),
    },
    {
        id: 2,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/vinaykuma-r/",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path d="M4.98 3.5C4.98 5 3.8 6.2 2.3 6.2S-.38 5-.38 3.5 1.2.8 2.7.8 4.98 2 4.98 3.5ZM.5 8h4v12h-4V8Zm7.5 0h3.8v1.7h.1c.5-.9 1.8-1.8 3.6-1.8 3.9 0 4.6 2.5 4.6 5.7V20h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-4V8Z" />
            </svg>
        ),
    },
    {
        id: 3,
        name: "Instagram",
        link: "https://www.instagram.com/v_inayk/",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
            </svg>
        ),
    },
];

export default socialLinks;