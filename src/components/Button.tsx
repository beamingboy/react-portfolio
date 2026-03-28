type ButtonProps = {
    text: string;
    onClick?: () => void;
    href?: string;
}

function Button({ text, onClick, href }: ButtonProps) {
    const baseStyle = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-m font-semibold font-medium transition";

    const primaryStyle = "bg-[var(--color-primary-button)] text-white hover:opacity-90";

    if (href) {
        return (
            <a href={href} className={`${baseStyle} ${primaryStyle}`}>
                {text}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={`${baseStyle} ${primaryStyle}`}>
            {text}
        </button>
    );
}

export default Button;