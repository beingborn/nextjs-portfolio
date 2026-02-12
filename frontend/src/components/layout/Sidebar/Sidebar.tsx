import MainLogo from '@/assets/logo.svg';
import MainLogoSymbol from '@/assets/logo_symbol.svg';
import SidebarMenuButton from '@/components/layout/Sidebar/SidebarMenuButton';
import useSidebarStore from '@/store/sidebar';
import {
    Component,
    House,
    Newspaper,
    NotebookPen,
    PanelLeftClose,
    PanelLeftOpen,
    SquareChartGantt,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', icon: <House />, href: '/' },
    { name: 'Project', icon: <SquareChartGantt />, href: '/project' },
    { name: 'Guestbook', icon: <NotebookPen />, href: '/guestbook' },
    { name: 'User Interface', icon: <Component />, href: '/ui' },
    { name: 'Board', icon: <Newspaper />, href: '/board' },
];

export default function Sidebar() {
    const { expanded, toggleSidebar } = useSidebarStore();
    const pathname = usePathname();

    return (
        <aside
            className={`flex flex-col items-stretch bg-sidebar-primary ${expanded ? 'w-[20rem]' : 'w-18'}`}
        >
            <div className="h-full flex flex-col">
                <div className="p-5">
                    <div
                        className={`flex pb-4 justify-between items-center ${!expanded && 'flex-col gap-8'}`}
                    >
                        <h1>
                            <Link href="/">
                                <Image src={expanded ? MainLogo : MainLogoSymbol} alt="Mh Dev" />
                            </Link>
                        </h1>
                        <button type="button" onClick={toggleSidebar}>
                            {expanded ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}

                            <span className="sr-only">
                                {expanded ? '사이드바 접기' : '사이드바 열기'}
                            </span>
                        </button>
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isRoot = pathname === '/';

                                // 메인일 경우 item.href = '/' 일경우에 active, 아닐 경우 startsWith
                                const isActive =
                                    item.href === '/' ? isRoot : pathname.startsWith(item.href);

                                return (
                                    <li key={item.name}>
                                        <SidebarMenuButton {...item} isActive={isActive} />
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="mt-auto p-5">
                    <Link href="/about">About Portfolio</Link>
                </div>
            </div>
        </aside>
    );
}
