import AktivitasUser from '@/components/aktivitasuser';
import ModalNotif from '@/components/modalnotif';
import Sidebar from '@/components/sidebar';
import GrafikTotal from '@/components/grafik/user/grafiktotal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

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

    const keaktifan = {
        label: 'Keaktifan',
        value: 70, // persen
        icon: '📊',
        color: 'from-orange-400 to-orange-600',
        iconBg: 'bg-gradient-to-br from-orange-300 to-orange-600',
    };

    // Animasi progres bar keaktifan
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = keaktifan.value;
        const duration = 900; // ms
        const step = 10; // ms
        const increment = end / (duration / step);

        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setProgress(Math.round(start));
        }, step);

        return () => clearInterval(interval);
    }, [keaktifan.value]);

    const [openNotif, setOpenNotif] = useState(false);
    const notifications = [
        'Verifikasi dokumen berhasil!',
        'Jadwal seminar telah diperbarui.',
        'Prestasi baru telah ditambahkan.',
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
            <div className="dashboard-content relative flex-1 pl-0 md:pl-[5rem]">
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
                        <div className="flex items-center gap-4">
                            {/* Ikon bel notifikasi */}
                            <div className="relative">
                                <button
                                    type="button"
                                    className="cursor-pointer transition-transform duration-200 hover:scale-125 focus:outline-none"
                                    aria-label="Notifikasi"
                                    onClick={() => setOpenNotif(true)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-yellow-400" // warna kuning
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.000 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </button>
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow">
                                    3
                                </span>
                            </div>
                            {/* Gambar profil/unandpath */}
                            <img
                                src="/unandpath.webp"
                                alt="Unand Path"
                                className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
                            />
                        </div>
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
                                                <span className="floating">
                                                    {stat.icon}
                                                </span>
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
                                                <span className="floating">
                                                    {stat.icon}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Card Keaktifan, sekarang sebaris */}
                        <div
                            className="relative flex h-36 w-full max-w-sm flex-col items-center justify-center rounded-xl border border-gray-200 bg-white/40 px-6 py-6 shadow-lg backdrop-blur-md"
                            data-aos="fade-up"
                            data-aos-delay={stats.length * 100}
                        >
                            {/* Icon dan Label */}
                            <div className="mb-4 flex items-center gap-4">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl shadow ${keaktifan.iconBg} border-2 border-white`}
                                >
                                    <span className="floating">
                                        {keaktifan.icon}
                                    </span>
                                </div>
                                <div className="text-lg font-semibold tracking-wide text-gray-700 uppercase">
                                    {keaktifan.label}
                                </div>
                            </div>
                            {/* Progress Bar */}
                            <div className="flex w-full flex-col items-center">
                                <div className="flex h-6 w-full items-center rounded-full bg-[#232323] px-1 shadow-inner">
                                    <div
                                        className="animated-stripes h-5 rounded-full"
                                        style={{
                                            width: `${progress}%`,
                                            boxShadow: '0 2px 8px #ffb34780',
                                            transition:
                                                'width 0.6s cubic-bezier(0.4, 2, 0.6, 1)',
                                        }}
                                    />
                                </div>
                                <span className="mt-2 text-sm font-semibold text-gray-700">
                                    {progress}%
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Info tambahan */}
                    <div
                        className="mt-8 flex flex-col items-center gap-6 rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-md sm:flex-row"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="flex shrink-0 items-center justify-center">
                            <img
                                src="/img/dashboard/unand.webp"
                                alt="Universitas Andalas"
                                className="h-24 w-24 object-contain sm:h-32 sm:w-32"
                            />
                        </div>
                        <div className="flex-1">
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

                    {/* Grafik Total Aktivitas */}
                    <GrafikTotal />

                    {/* Aktivitas User */}
                    <AktivitasUser />
                </main>
            </div>
            <ModalNotif
                open={openNotif}
                onClose={() => setOpenNotif(false)}
                notifications={notifications}
            />
        </div>
    );
}
