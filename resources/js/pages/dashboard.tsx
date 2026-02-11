import Sidebar from '@/components/sidebar';
// Tambahkan import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Dashboard() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    const stats = [
        {
            label: 'verifikasi',
            value: 87,
            icon: '✅',
            color: 'from-green-400 to-green-600',
            iconBg: 'bg-gradient-to-br from-green-300 to-green-600',
        },
        {
            label: 'Akademik',
            value: 42,
            icon: '🎓',
            color: 'from-blue-400 to-blue-600',
            iconBg: 'bg-gradient-to-br from-blue-300 to-blue-600',
        },
        {
            label: 'Nonakademik',
            value: 25,
            icon: '🏆',
            color: 'from-yellow-400 to-yellow-600',
            iconBg: 'bg-gradient-to-br from-yellow-300 to-yellow-600',
        },
    ];

    return (
        <div
            className="relative flex min-h-screen overflow-x-hidden"
            style={{
                backgroundImage: "url('/unandpath.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay gelap dan blur menyeluruh */}
            <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm" />
            {/* Sidebar */}
            <Sidebar />
            {/* Konten utama */}
            <div className="relative z-10 flex-1">
                <main className="relative flex-1 p-8 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <div>
                            <h1
                                className="bg-white bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-lg"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                Selamat Datang
                            </h1>
                        </div>
                        <img
                            src="/unandpath.webp"
                            alt="Unand Path"
                            className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
                        />
                    </div>
                    {/* Statistik Overview */}
                    <div className="mb-10 flex flex-wrap justify-center gap-5">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                tabIndex={0}
                                className="flip-card group relative h-36 w-full max-w-sm cursor-pointer outline-none"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="flip-card-inner relative h-full w-full">
                                    {/* Front: garis penanda di ujung kiri */}
                                    <div
                                        className={`flip-card-front absolute inset-0 z-10 flex flex-row items-center justify-center rounded-xl border border-gray-200 bg-white/40 px-2 py-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-400`}
                                    >
                                        {/* Garis penanda warna di ujung kiri */}
                                        <div
                                            className={`absolute top-1/2 left-0 h-6/6 w-2 -translate-y-1/2 rounded-l-2xl bg-gradient-to-b ${stat.color}`}
                                        />
                                        {/* Konten card */}
                                        <div className="relative z-10 flex w-full flex-row items-center justify-center">
                                            {/* Icon */}
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl shadow ${stat.iconBg} border-2 border-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                                            >
                                                {stat.icon}
                                            </div>
                                            {/* Garis pembatas */}
                                            <div className="mx-4 h-10 w-px bg-gray-300" />
                                            {/* Label */}
                                            <div className="text-lg font-semibold tracking-wide text-gray-700 uppercase">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Back: garis penanda di ujung kiri */}
                                    <div
                                        className={`flip-card-back absolute inset-0 z-20 flex flex-row items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} border border-gray-200 px-2 py-4 text-white shadow-lg`}
                                    >
                                        {/* Konten card */}
                                        <div className="relative z-10 flex w-full flex-row items-center justify-center">
                                            {/* Value */}
                                            <div className="text-4xl font-extrabold">
                                                {stat.value}
                                            </div>
                                            {/* Garis pembatas */}
                                            <div className="mx-4 h-10 w-px bg-white/50" />
                                            {/* Icon */}
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-2xl shadow`}
                                            >
                                                {stat.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Info tambahan */}
                    <div
                        className="mt-8 flex flex-col items-center gap-6 rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-md sm:flex-row"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="to-[#0f3460]text-3xl flex h-16 w-16 items-center justify-center rounded-full bg-gray-400 shadow-lg">
                            ❗
                        </div>
                        <div>
                            <h2 className="mb-1 text-center text-2xl font-bold text-gray-800 md:text-left">
                                Tentang Unand Path
                            </h2>
                            <p className="text-center text-lg text-gray-700 md:text-left">
                                Unand Path adalah aplikasi monitoring progres
                                mahasiswa Universitas Andalas dalam bidang
                                akademik maupun nonakademik. Dengan Unand Path,
                                mahasiswa dan pihak kampus dapat memantau
                                capaian, perkembangan, serta prestasi mahasiswa
                                secara terintegrasi dan mudah diakses.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
