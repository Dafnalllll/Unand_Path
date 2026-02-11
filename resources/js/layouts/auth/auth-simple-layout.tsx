import AppLogoIcon from '@/components/app-logo-icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div
            className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-cover bg-center p-6 md:p-10"
            style={{
                backgroundImage: "url('/unandpath.webp')",
            }}
        >
            {/* Overlay gelap */}
            <div className="absolute inset-0 z-0 bg-black/60" />
            <div className="relative z-10 w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <div className="mb-1 flex h-32 w-32 items-center justify-center rounded-md">
                            <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                        </div>
                        <span className="sr-only">{title}</span>
                        <div
                            className="space-y-2 text-center"
                            data-aos="fade-zoom-in"
                        >
                            <h1
                                className="text-xl font-medium"
                                data-aos="fade-zoom-in"
                            >
                                {title}
                            </h1>
                            <p
                                className="text-center text-sm text-muted-foreground whitespace-nowrap"
                                data-aos="fade-zoom-in"
                            >
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
