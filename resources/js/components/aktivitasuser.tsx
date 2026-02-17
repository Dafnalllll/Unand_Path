import { useState } from 'react';
import {
    FaBook,
    FaCheckCircle,
    FaChevronLeft,
    FaChevronRight,
    FaEnvelope,
    FaMedal,
    FaSignInAlt,
    FaTimesCircle,
    FaUpload,
    FaUserEdit,
} from 'react-icons/fa';

const aktivitas = [
    // ...data aktivitas seperti sebelumnya...
    {
        id: 1,
        nama: 'Upload Sertifikat',
        waktu: '2026-02-11 09:12',
        status: 'Berhasil',
        icon: <FaUpload className="text-blue-500" />,
    },
    {
        id: 2,
        nama: 'Edit Profil',
        waktu: '2026-02-10 21:45',
        status: 'Berhasil',
        icon: <FaUserEdit className="text-yellow-500" />,
    },
    {
        id: 3,
        nama: 'Verifikasi Email',
        waktu: '2026-02-10 20:30',
        status: 'Berhasil',
        icon: <FaEnvelope className="text-green-500" />,
    },
    {
        id: 4,
        nama: 'Tambah Prestasi Akademik',
        waktu: '2026-02-10 19:10',
        status: 'Ditolak',
        icon: <FaBook className="text-indigo-500" />,
    },
    {
        id: 5,
        nama: 'Tambah Prestasi Nonakademik',
        waktu: '2026-02-10 18:30',
        status: 'Berhasil',
        icon: <FaMedal className="text-pink-500" />,
    },
    {
        id: 6,
        nama: 'Login',
        waktu: '2026-02-10 18:00',
        status: 'Berhasil',
        icon: <FaSignInAlt className="text-pink-500" />,
    },
    {
        id: 7,
        nama: 'Update Password',
        waktu: '2026-02-09 17:00',
        status: 'Berhasil',
        icon: <FaUserEdit className="text-yellow-500" />,
    },
    {
        id: 8,
        nama: 'Upload Foto Profil',
        waktu: '2026-02-09 16:30',
        status: 'Berhasil',
        icon: <FaUpload className="text-blue-500" />,
    },
    {
        id: 9,
        nama: 'Tambah Prestasi Akademik',
        waktu: '2026-02-09 15:10',
        status: 'Berhasil',
        icon: <FaBook className="text-indigo-500" />,
    },
    {
        id: 10,
        nama: 'Tambah Prestasi Nonakademik',
        waktu: '2026-02-09 14:30',
        status: 'Ditolak',
        icon: <FaMedal className="text-pink-500" />,
    },
    {
        id: 11,
        nama: 'Verifikasi Email',
        waktu: '2026-02-09 13:30',
        status: 'Berhasil',
        icon: <FaEnvelope className="text-green-500" />,
    },
    {
        id: 12,
        nama: 'Login',
        waktu: '2026-02-09 12:00',
        status: 'Berhasil',
        icon: <FaSignInAlt className="text-pink-500" />,
    },
    {
        id: 13,
        nama: 'Upload Sertifikat',
        waktu: '2026-02-08 11:12',
        status: 'Ditolak',
        icon: <FaUpload className="text-blue-500" />,
    },
    {
        id: 14,
        nama: 'Edit Profil',
        waktu: '2026-02-08 10:45',
        status: 'Berhasil',
        icon: <FaUserEdit className="text-yellow-500" />,
    },
    {
        id: 15,
        nama: 'Tambah Prestasi Akademik',
        waktu: '2026-02-08 09:10',
        status: 'Berhasil',
        icon: <FaBook className="text-indigo-500" />,
    },
    {
        id: 16,
        nama: 'Tambah Prestasi Nonakademik',
        waktu: '2026-02-08 08:30',
        status: 'Berhasil',
        icon: <FaMedal className="text-pink-500" />,
    },
];

const PAGE_SIZE = 6;

export default function AktivitasUser() {
    const [page, setPage] = useState(0);

    // Data untuk desktop dan mobile
    const pagedAktivitas = aktivitas.slice(
        page * PAGE_SIZE,
        page * PAGE_SIZE + PAGE_SIZE,
    );

    const totalPages = Math.ceil(aktivitas.length / PAGE_SIZE);
    const canPrev = page > 0;
    const canNext = (page + 1) * PAGE_SIZE < aktivitas.length;

    return (
        <div
            className="mx-auto mt-8 w-full rounded-xl bg-white/80 p-6 shadow-xl backdrop-blur-md"
            data-aos="fade-in"
            data-aos-delay="500"
        >
            <h2 className="mb-6 flex items-center justify-center gap-2 text-2xl font-extrabold text-blue-700 md:items-start md:justify-start">
                <span className="mr-2 inline-block h-8 w-2 rounded-full bg-gradient-to-b from-blue-400 to-blue-600"></span>
                Aktivitas Terakhir
            </h2>
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
                <table className="min-w-full divide-y divide-blue-200 rounded-lg bg-white shadow">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-bold text-blue-700">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-bold text-blue-700">
                                Aktivitas
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-bold text-blue-700">
                                Waktu
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-bold text-blue-700">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagedAktivitas.map((item, idx) => (
                            <tr
                                key={item.id}
                                className="transition-colors hover:bg-blue-50"
                                data-aos="fade-right"
                                data-aos-delay={idx * 100}
                            >
                                <td className="px-6 py-4 text-lg">
                                    {item.icon}
                                </td>
                                <td className="flex items-center gap-2 px-6 py-4 font-semibold text-gray-800">
                                    {item.nama}
                                    {item.status === 'Berhasil' ? (
                                        <FaCheckCircle
                                            className="text-green-500"
                                            title="Berhasil"
                                        />
                                    ) : (
                                        <FaTimesCircle
                                            className="text-red-500"
                                            title="Ditolak"
                                        />
                                    )}
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {item.waktu}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-bold shadow ${
                                            item.status === 'Berhasil'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Desktop Pagination */}
                <div className="mt-2 flex flex-col items-center gap-2">
                    <div className="flex justify-center gap-4">
                        <button
                            className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold shadow transition ${
                                canPrev
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                            }`}
                            onClick={() => setPage((p) => Math.max(0, p - 1))}
                            disabled={!canPrev}
                        >
                            <FaChevronLeft /> Sebelumnya
                        </button>
                        <button
                            className={`flex  items-center gap-1 rounded-full px-4 py-2 text-sm font-bold shadow transition ${
                                canNext
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                            }`}
                            onClick={() =>
                                setPage((p) => (canNext ? p + 1 : p))
                            }
                            disabled={!canNext}
                        >
                            Selanjutnya <FaChevronRight />
                        </button>
                    </div>
                    {/* Pagination Numbers */}
                    <div className="mt-1 flex gap-1">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border text-sm font-bold transition-all ${
                                    i === page
                                        ? 'border-blue-600 bg-blue-600 text-white'
                                        : 'border-blue-200 bg-white text-blue-700 hover:bg-blue-100'
                                }`}
                                onClick={() => setPage(i)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* Mobile Card/List dengan navigasi */}
            <div className="block space-y-4 md:hidden">
                {pagedAktivitas.map((item, idx) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-4 rounded-lg bg-white/90 p-4 shadow transition hover:bg-blue-50"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 font-semibold text-gray-800">
                                {item.nama}
                                {item.status === 'Berhasil' ? (
                                    <FaCheckCircle
                                        className="text-green-500"
                                        title="Berhasil"
                                    />
                                ) : (
                                    <FaTimesCircle
                                        className="text-red-500"
                                        title="Ditolak"
                                    />
                                )}
                            </div>
                            <div className="text-xs text-gray-500">
                                {item.waktu}
                            </div>
                        </div>
                        <span
                            className={`rounded-full px-3 py-1 text-xs font-bold shadow ${
                                item.status === 'Berhasil'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                            }`}
                        >
                            {item.status}
                        </span>
                    </div>
                ))}
                {/* Pagination Controls */}
                <div className="mt-2 flex flex-col items-center gap-2">
                    <div className="flex justify-center gap-4">
                        <button
                            className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold shadow transition ${
                                canPrev
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                            }`}
                            onClick={() => setPage((p) => Math.max(0, p - 1))}
                            disabled={!canPrev}
                        >
                            <FaChevronLeft /> Sebelumnya
                        </button>
                        <button
                            className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold shadow transition ${
                                canNext
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                            }`}
                            onClick={() =>
                                setPage((p) => (canNext ? p + 1 : p))
                            }
                            disabled={!canNext}
                        >
                            Selanjutnya <FaChevronRight />
                        </button>
                    </div>
                    {/* Pagination Numbers */}
                    <div className="mt-1 flex gap-1">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm font-bold transition-all ${
                                    i === page
                                        ? 'border-blue-600 bg-blue-600 text-white'
                                        : 'border-blue-200 bg-white text-blue-700 hover:bg-blue-100'
                                }`}
                                onClick={() => setPage(i)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
