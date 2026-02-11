import { usePage } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function NotFound(props: { isLoggedIn?: boolean }) {
    useEffect(() => {
        AOS.init();
    }, []);

    // Ambil dari props atau dari usePage().props
    const { isLoggedIn } = usePage().props as { isLoggedIn?: boolean };

    // Tentukan link tujuan
    const homeLink = isLoggedIn ? '/dashboard' : '/';

    return (
        <div
            className="relative flex min-h-screen items-center justify-center"
            style={{
                backgroundImage: "url('/unandpath.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            data-aos="fade-in"
            data-aos-duration="1200"
        >
            {/* Overlay */}
            <div className="bg-opacity-60 absolute inset-0 bg-black/60" />

            {/* Content */}
            <div
                className="relative z-10 flex flex-col items-center text-center text-white"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                {/* Ikon Unand */}
                <img
                    src="/unand_path.webp"
                    alt="Unand Icon"
                    className="mx-auto mb-6 h-34 w-34 p-2"
                    style={{ objectFit: 'contain' }}
                />
                <h1 className="mb-4 text-6xl font-bold drop-shadow-lg">404</h1>
                <h2 className="mb-2 text-2xl font-semibold drop-shadow">
                    Halaman Tidak Ditemukan
                </h2>
                <p className="mb-6 text-lg drop-shadow">
                    Maaf, halaman yang kamu cari tidak tersedia.
                </p>
                {/* Tombol dengan wrapper AOS dan hover scale */}
                <div data-aos="zoom-in" data-aos-delay="600">
                    <a
                        href={homeLink}
                        className="hover:bg-[#ffb800]transition-transform inline-block rounded bg-[#ffd369] px-6 py-2 font-semibold text-black shadow transition duration-200 hover:scale-105"
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        </div>
    );
}
