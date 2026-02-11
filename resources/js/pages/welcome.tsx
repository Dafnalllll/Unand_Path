import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Welcome() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div
            className="relative flex min-h-screen items-center justify-center "
            style={{
                backgroundImage: "url('/unandpath.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay gelap */}
            <div className="absolute inset-0 z-0 bg-black/60" />
            <main
                className="relative mx-auto max-w-2xl p-12 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <img
                    src="/unand_path.webp"
                    alt="Unand Logo"
                    className="mx-auto mb-8 h-32 w-32"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                />
                <h1
                    className="mb-4 text-4xl font-bold text-white"
                    data-aos="fade-down"
                    data-aos-delay="600"
                >
                    Selamat Datang di UnandPath
                </h1>
                <p
                    className="mb-8 text-lg whitespace-wrap text-white"
                    data-aos="fade-up"
                    data-aos-delay="800"
                >
                    Platform Digital Rekam Jejak Terpadu Mahasiswa Universitas
                    Andalas
                </p>
                <div data-aos="zoom-in" data-aos-delay="1000">
                    <a
                        href="/dashboard"
                        className="inline-block rounded-lg bg-blue-700 px-8 py-3 text-white shadow transition-all hover:scale-105 hover:bg-blue-800"
                    >
                        Mulai Sekarang
                    </a>
                </div>
            </main>
        </div>
    );
}
