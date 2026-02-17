import { Inertia } from '@inertiajs/inertia';
import {
    CategoryScale,
    Chart as ChartJS, // Tambahkan ini
    ChartOptions,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler, // Tambahkan ini
);

// Ganti warna utama menjadi orange
const mainColor = '#f59e42';
const mainBg = 'rgba(245, 158, 66, 0.15)';
const mainIcon = 'text-orange-500';
const mainGrid = '#fbeee0';

// Data dan total
const aktivitasData = [10, 15, 12, 20, 18, 25];
const totalAktivitas = aktivitasData.reduce((a, b) => a + b, 0);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [
        {
            label: 'Total Aktivitas',
            data: aktivitasData,
            borderColor: mainColor,
            backgroundColor: mainBg,
            pointBackgroundColor: mainColor,
            pointBorderColor: '#fff',
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: true,
            tension: 0,
        },
    ],
};

const options: ChartOptions<'line'> = {
    // Tambahkan tipe ChartOptions<'line'>
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    elements: {
        line: {
            borderWidth: 3,
            tension: 0,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: mainGrid,
            },
            ticks: {
                color: mainColor,
                font: {
                    weight: 'bold',
                },
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: mainColor,
                font: {
                    weight: 'bold',
                },
            },
        },
    },
};

export default function GrafikTotal() {
    const handleChartClick = () => {
        Inertia.get('/detail-grafik');
    };

    // --- Tampilan Desktop ---
    const DesktopChart = (
        <div
            className="mx-auto mt-8 hidden w-full max-w-6xl rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-100 via-white to-yellow-50 p-6 shadow-lg sm:block"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="mb-4">
                <h3 className="mb-1 flex items-center gap-2 text-xl font-bold text-orange-700">
                    <svg
                        width="22"
                        height="22"
                        fill="none"
                        className={`inline-block ${mainIcon}`}
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 14l3-3 4 4 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Grafik Total Aktivitas
                </h3>
                <p className="text-sm text-gray-600">
                    Grafik ini menampilkan jumlah total aktivitas pengguna
                    setiap bulan. Pantau perkembangan aktivitas Anda secara
                    berkala untuk meningkatkan produktivitas dan pencapaian.
                </p>
            </div>
            <div className="h-72 w-full">
                <Line
                    data={data}
                    options={{ ...options, maintainAspectRatio: false }}
                />
            </div>
            <div className="mt-4 flex items-center gap-4">
                <span className="inline-block h-4 w-4 rounded-full bg-orange-400" />
                <span className="text-sm font-semibold text-gray-700">
                    Total Keseluruhan:&nbsp;
                    <span className="font-bold text-orange-600">
                        {totalAktivitas}
                    </span>
                </span>
                <button
                    onClick={handleChartClick}
                    className="ml-auto flex items-center gap-2 rounded-lg border border-orange-300 bg-white/80 px-3 py-1.5 shadow transition-all cursor-pointer hover:bg-orange-100 hover:scale-110"
                    title="Lihat detail grafik"
                >
                    <img
                        src="/img/sidebar/chart.webp"
                        alt="Chart"
                        className="h-6 w-6 object-contain"
                    />
                </button>
            </div>
        </div>
    );

    // --- Tampilan Mobile ---
    const MobileChart = (
        <div
            className="mx-auto mt-4 block w-full max-w-xs rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-100 via-white to-yellow-50 p-3 shadow sm:hidden"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <div className="mb-2">
                <h3 className="mb-1 flex items-center gap-1 text-base font-bold text-orange-700">
                    <svg
                        width="22"
                        height="22"
                        fill="none"
                        className={`inline-block ${mainIcon}`}
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 14l3-3 4 4 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Grafik Aktivitas
                </h3>
                <p className="text-xs text-gray-600">
                    Total aktivitas per bulan.
                </p>
            </div>
            <div className="h-40 w-full">
                <Line
                    data={data}
                    options={{ ...options, maintainAspectRatio: false }}
                />
            </div>
            <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-center gap-1">
                    <span className="inline-block h-4 w-4 rounded-full bg-orange-400" />
                    <span className="text-xs font-semibold text-gray-700">
                        Total:&nbsp;
                        <span className="font-bold text-orange-600">
                            {totalAktivitas}
                        </span>
                    </span>
                </div>
                <button
                    onClick={handleChartClick}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-orange-300 bg-white/80 px-3 py-1.5 shadow transition hover:bg-orange-100"
                    title="Lihat detail grafik"
                >
                    <img
                        src="/img/sidebar/chart.webp"
                        alt="Chart"
                        className="h-6 w-6 object-contain"
                    />
                    <span className="text-xs font-semibold text-orange-700">
                        Detail Grafik
                    </span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {DesktopChart}
            {MobileChart}
        </>
    );
}
