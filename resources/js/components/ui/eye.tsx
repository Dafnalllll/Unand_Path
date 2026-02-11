import { useState } from "react";

interface EyeProps {
    inputId: string;
}

export default function Eye({ inputId }: EyeProps) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
        const input = document.getElementById(inputId) as HTMLInputElement;
        if (input) {
            input.type = visible ? "password" : "text";
        }
    };

    return (
        <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent p-1 focus:outline-none"
            aria-label={visible ? "Sembunyikan password" : "Lihat password"}
        >
            <span
                className={`block transition-all duration-300 ${
                    visible ? "scale-100 opacity-100" : "scale-90 opacity-80"
                }`}
            >
                {visible ? (
                    // Mata terbuka: gaya minimalis
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M1 12C3.5 7 8 4 12 4s8.5 3 11 8c-2.5 5-7 8-11 8s-8.5-3-11-8z" stroke="white" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="3" fill="white"/>
                        <circle cx="12" cy="12" r="1.5" fill="#222"/>
                    </svg>
                ) : (
                    // Mata tertutup: kelopak bawah naik
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M1 12C3.5 7 8 4 12 4s8.5 3 11 8c-2.5 5-7 8-11 8s-8.5-3-11-8z" stroke="white" strokeWidth="2" fill="none"/>
                        <path d="M4 16c2.5-2 5.5-3 8-3s5.5 1 8 3" stroke="white" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="3" fill="#222" opacity="0.2"/>
                    </svg>
                )}
            </span>
        </button>
    );
}
