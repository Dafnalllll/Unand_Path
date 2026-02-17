import { useEffect } from 'react';

interface ModalNotifProps {
    open: boolean;
    onClose: () => void;
    notifications?: string[];
}

export default function ModalNotif({
    open,
    onClose,
    notifications = [],
}: ModalNotifProps) {
    useEffect(() => {
        if (!open) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="animate-fadeIn relative w-full max-w-sm rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 p-6 shadow-2xl">
                <button
                    className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
                    onClick={onClose}
                    aria-label="Tutup"
                >
                    ×
                </button>
                <div className="mb-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-yellow-400 p-2 text-xl text-white shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                    </span>
                    <h3 className="text-lg font-bold text-gray-800">
                        Notifikasi
                    </h3>
                    <span className="ml-auto rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white shadow">
                        {notifications.length}
                    </span>
                </div>
                <ul className="space-y-3">
                    {notifications.length === 0 ? (
                        <li className="text-center text-gray-500">
                            Tidak ada notifikasi baru.
                        </li>
                    ) : (
                        notifications.map((notif, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-2 rounded-lg bg-yellow-100 px-3 py-2 text-gray-700 shadow transition-all duration-200 hover:bg-yellow-200"
                            >
                                <span className="text-yellow-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4"
                                        />
                                    </svg>
                                </span>
                                {notif}
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <style>{`
                .animate-fadeIn {
                    animation: fadeInModal 0.4s cubic-bezier(.68,-0.55,.27,1.55);
                }
                @keyframes fadeInModal {
                    0% { opacity: 0; transform: translateY(40px) scale(0.95);}
                    100% { opacity: 1; transform: translateY(0) scale(1);}
                }
            `}</style>
        </div>
    );
}
