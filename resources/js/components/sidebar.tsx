import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Sidebar() {
    const { url } = usePage();
    const [active, setActive] = useState(url);
    const [expanded, setExpanded] = useState(false);
    const [prestasiHover, setPrestasiHover] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobilePrestasiOpen, setMobilePrestasiOpen] = useState(false);

    const menuItems = [
        {
            title: 'Beranda',
            href: '/dashboard',
            icon: (
                <img
                    src="/img/sidebar/dashboard.webp"
                    alt="Dashboard"
                    className="h-6 w-6"
                    style={{
                        display: 'inline-block',
                        filter:
                            active === '/dashboard'
                                ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                />
            ),
        },
        {
            title: 'Profil',
            href: '/profile',
            icon: (
                <img
                    src="/img/sidebar/user.webp"
                    alt="Profil"
                    className="h-6 w-6"
                    style={{
                        display: 'inline-block',
                        filter:
                            active === '/profile'
                                ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                />
            ),
        },
        {
            title: 'Prestasi',
            href: '/prestasi',
            icon: (
                <img
                    src="/img/sidebar/achievement.webp"
                    alt="Prestasi"
                    className="h-6 w-6"
                    style={{
                        display: 'inline-block',
                        filter:
                            active === '/prestasi'
                                ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                />
            ),
            children: [
                {
                    title: 'Akademik',
                    href: '/prestasi/akademik',
                    icon: (
                        <img
                            src="/img/sidebar/academic.webp"
                            alt="Akademik"
                            className="h-5 w-5"
                            style={{
                                display: 'inline-block',
                                filter:
                                    active === '/prestasi/akademik'
                                        ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                        : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                            }}
                        />
                    ),
                },
                {
                    title: 'Nonakademik',
                    href: '/prestasi/nonakademik',
                    icon: (
                        <img
                            src="/img/sidebar/nonacademic.webp"
                            alt="Nonakademik"
                            className="h-5 w-5"
                            style={{
                                display: 'inline-block',
                                filter:
                                    active === '/prestasi/nonakademik'
                                        ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                        : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                            }}
                        />
                    ),
                },
                {
                    title: 'Tambah Prestasi',
                    href: '/prestasi/tambah',
                    icon: (
                        <img
                            src="/img/sidebar/add.webp"
                            alt="Tambah Prestasi"
                            className="h-5 w-5"
                            style={{
                                display: 'inline-block',
                                filter:
                                    active === '/prestasi/tambah'
                                        ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                        : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                            }}
                        />
                    ),
                },
            ],
        },
        {
            title: 'Portofolio',
            href: '/portofolio',
            icon: (
                <img
                    src="/img/sidebar/cv.webp"
                    alt="Portofolio"
                    className="h-6 w-6"
                    style={{
                        display: 'inline-block',
                        filter:
                            active === '/portofolio'
                                ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                />
            ),
        },
        {
            title: 'Statistik',
            href: '/statistik',
            icon: (
                <img
                    src="/img/sidebar/chart.webp"
                    alt="Statistik"
                    className="h-6 w-6"
                    style={{
                        display: 'inline-block',
                        filter:
                            active === '/statistik'
                                ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                />
            ),
        },
    ];

    // Sidebar Desktop
    const DesktopSidebar = (
        <aside
            data-aos="fade-right"
            data-aos-delay="50"
            style={{ fontFamily: 'Inter, sans-serif' }}
            className={cn(
                'hidden h-screen flex-col border-r border-gray-700 bg-gradient-to-b from-[#232946] via-[#1a1a2e] to-[#0f3460] shadow-xl transition-all duration-600 md:flex',
                expanded ? 'w-56' : 'w-20',
            )}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => {
                setExpanded(false);
                setPrestasiHover(false);
            }}
        >
            {/* Logo */}
            <div className="flex h-24 w-full items-center justify-center border-b border-gray-700 bg-[#232946]">
                <img
                    src="/unand_path.webp"
                    alt="Unand Logo"
                    className="h-20 w-20"
                />
            </div>
            {/* Menu dan Logout */}
            <div className="flex w-full flex-1 flex-col justify-between">
                <nav className="mt-8 flex flex-col justify-start gap-2 px-2">
                    {menuItems.map((item) => (
                        <div
                            key={item.href}
                            onMouseEnter={() => {
                                if (item.title === 'Prestasi')
                                    setPrestasiHover(true);
                            }}
                            onMouseLeave={() => {
                                if (item.title === 'Prestasi')
                                    setPrestasiHover(false);
                            }}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    'group relative flex h-14 items-center rounded-xl px-4 text-2xl text-gray-300 transition-all duration-300',
                                    active === item.href
                                        ? 'bg-[#222831] text-[#ffd369] shadow-lg'
                                        : 'hover:bg-[#232946] hover:text-[#ffd369]',
                                )}
                                onClick={() => setActive(item.href)}
                                title={item.title}
                                style={{ minWidth: 0 }}
                            >
                                {/* Tracking indicator */}
                                <span
                                    className={cn(
                                        'absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 rounded bg-[#ffd369] transition-all duration-300',
                                        active === item.href
                                            ? 'opacity-100'
                                            : 'opacity-0 group-hover:opacity-60',
                                    )}
                                />
                                <span className="mr-4 flex-shrink-0 transition-all duration-300">
                                    {item.icon}
                                </span>
                                <span
                                    className={cn(
                                        'font-inter overflow-hidden text-base whitespace-nowrap transition-all duration-300',
                                        expanded
                                            ? 'ml-1 w-auto opacity-100'
                                            : 'ml-0 w-0 opacity-0',
                                    )}
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        transitionProperty:
                                            'opacity, width, margin',
                                    }}
                                >
                                    {item.title}
                                </span>
                            </Link>
                            {/* Submenu Prestasi: hanya muncul saat hover dan expanded */}
                            {item.children && (
                                <div
                                    style={{
                                        maxHeight:
                                            expanded && prestasiHover ? 200 : 0,
                                        opacity:
                                            expanded && prestasiHover ? 1 : 0,
                                        transition:
                                            'max-height 0.8s cubic-bezier(0.4,0,0.2,1), opacity 0.8s',
                                        overflow: 'hidden',
                                    }}
                                    className="ml-8 flex flex-col gap-1"
                                >
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={cn(
                                                'flex items-center rounded-lg px-3 py-2 text-base text-gray-300 transition-all duration-300',
                                                active === child.href
                                                    ? 'bg-[#222831] text-[#ffd369]'
                                                    : 'hover:bg-[#232946] hover:text-[#ffd369]',
                                            )}
                                            onClick={() =>
                                                setActive(child.href)
                                            }
                                            title={child.title}
                                            style={{ minWidth: 0 }}
                                        >
                                            <span className="mr-3 flex-shrink-0">
                                                {child.icon}
                                            </span>
                                            <span
                                                className={cn(
                                                    'overflow-hidden whitespace-nowrap transition-all duration-300',
                                                    expanded
                                                        ? 'w-auto opacity-100'
                                                        : 'w-0 opacity-0',
                                                )}
                                                style={{
                                                    fontFamily:
                                                        'Inter, sans-serif',
                                                    transitionProperty:
                                                        'opacity, width, margin',
                                                }}
                                            >
                                                {child.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                {/* Logout di bagian paling bawah */}
                <div className="flex w-full px-2 pb-4">
                    <Link
                        as="button"
                        method="post"
                        href="/logout"
                        className={cn(
                            'group relative flex h-14 w-full cursor-pointer items-center rounded-xl px-4 text-2xl text-gray-300 transition-all duration-300 hover:bg-[#393e46] hover:text-[#ffd369]',
                            active === '/logout'
                                ? 'bg-[#222831] text-[#ffd369] shadow-lg'
                                : '',
                        )}
                        title="Logout"
                        style={{ minWidth: 0 }}
                    >
                        {/* Tracking indicator */}
                        <span
                            className={cn(
                                'absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded bg-[#ffd369] transition-all duration-300',
                                active === '/logout'
                                    ? 'opacity-100'
                                    : 'opacity-0 group-hover:opacity-60',
                            )}
                        />
                        <span className="mr-4 flex-shrink-0 transition-all duration-300">
                            <img
                                src="/img/sidebar/logout.webp"
                                alt="Logout"
                                className="h-6 w-6"
                                style={{
                                    display: 'inline-block',
                                    filter:
                                        active === '/logout'
                                            ? 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(500%) hue-rotate(0deg)'
                                            : 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                                }}
                            />
                        </span>
                        <span
                            className={cn(
                                'overflow-hidden text-xl whitespace-nowrap transition-all duration-300',
                                expanded
                                    ? 'ml-1 w-auto opacity-100'
                                    : 'ml-0 w-0 opacity-0',
                            )}
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                transitionProperty: 'opacity, width, margin',
                            }}
                        >
                            Logout
                        </span>
                    </Link>
                </div>
            </div>
            {/* Footer */}
            <div className="mb-2 flex min-h-[20px] w-full items-end justify-center text-center text-xs text-gray-400">
                <span
                    className={cn(
                        'transition-opacity duration-300',
                        expanded ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    &copy; {new Date().getFullYear()}{' '}
                    <span className="text-[#ffd369]">UnandPath</span>
                </span>
            </div>
        </aside>
    );

    // Sidebar Mobile
    const MobileSidebar = (
        <>
            {/* Hamburger Button */}
            <button
                className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-[#232946] text-white shadow-lg md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open sidebar"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={
                            mobileOpen
                                ? 'M6 18L18 6M6 6l12 12'
                                : 'M4 6h16M4 12h16M4 18h16'
                        }
                    />
                </svg>
            </button>

            {/* Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-64 bg-gradient-to-b from-[#232946] via-[#1a1a2e] to-[#0f3460] shadow-xl transition-transform duration-300 md:hidden ${
                    mobileOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Tombol close di pojok kanan atas */}
                <button
                    className="absolute top-4 right-4 z-60 flex h-8 w-8 items-center justify-center rounded-md bg-[#232946] text-white shadow-lg"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close sidebar"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                {/* Logo */}
                <div className="flex h-24 w-full items-center justify-center border-b border-gray-700 bg-[#232946]">
                    <img
                        src="/unand_path.webp"
                        alt="Unand Logo"
                        className="h-20 w-20"
                    />
                </div>
                {/* Menu */}
                <nav className="mt-8 flex flex-col gap-2 px-4">
                    {menuItems.map((item) =>
                        item.children ? (
                            <div key={item.href} className="flex flex-col">
                                {/* Parent menu with dropdown */}
                                <button
                                    type="button"
                                    className={`flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-lg text-gray-300 transition-all duration-300 ${
                                        url.startsWith(item.href)
                                            ? 'bg-[#222831] text-[#ffd369]'
                                            : 'hover:bg-[#232946] hover:text-[#ffd369]'
                                    }`}
                                    onClick={() =>
                                        setMobilePrestasiOpen((open) => !open)
                                    }
                                >
                                    <span className="flex items-center gap-3">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </span>
                                    {/* Arrow icon */}
                                    <svg
                                        className={`h-5 w-5 transform transition-transform duration-200 ${
                                            mobilePrestasiOpen
                                                ? 'rotate-90'
                                                : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown submenu */}
                                <div
                                    className={`ml-8 flex flex-col gap-1 overflow-hidden transition-all duration-300 ${
                                        mobilePrestasiOpen
                                            ? 'max-h-40'
                                            : 'max-h-0'
                                    }`}
                                >
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={`flex items-center gap-3 rounded-lg px-4 py-2 text-base transition-all duration-300 ${
                                                url === child.href
                                                    ? 'bg-[#222831] text-[#ffd369]'
                                                    : 'text-gray-300 hover:bg-[#232946] hover:text-[#ffd369]'
                                            }`}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {child.icon}
                                            <span>{child.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 rounded-xl px-4 py-3 text-lg text-gray-300 transition-all duration-300 ${
                                    url === item.href
                                        ? 'bg-[#222831] text-[#ffd369]'
                                        : 'hover:bg-[#232946] hover:text-[#ffd369]'
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </Link>
                        ),
                    )}
                </nav>
                {/* Logout */}
                <div className="absolute bottom-12 left-0 w-full px-4">
                    <Link
                        as="button"
                        method="post"
                        href="/logout"
                        className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-lg text-gray-300 transition-all duration-300 hover:bg-[#393e46] hover:text-[#ffd369]"
                        onClick={() => setMobileOpen(false)}
                    >
                        <img
                            src="/img/sidebar/logout.webp"
                            alt="Logout"
                            className="h-6 w-6"
                        />
                        <span>Logout</span>
                    </Link>
                </div>
                {/* Copyright/Footer */}
                <div className="absolute bottom-2 left-0 flex w-full items-center justify-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()}{' '}
                    <span className="ml-1 text-[#ffd369]">UnandPath</span>
                </div>
            </aside>
        </>
    );

    return (
        <>
            {DesktopSidebar}
            {MobileSidebar}
        </>
    );
}
