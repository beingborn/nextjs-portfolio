import MainLogo from '@/assets/logo.svg';
import {
    Component,
    House,
    Newspaper,
    NotebookPen,
    PanelRight,
    SquareChartGantt,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* 
    Component 

    SidebarTrigger 
    - 전역 Sidebar 상태 expanded 상태 전환 

    SidebarLink 
    - url과 href의 값이 같을 경우 isActive 변수를 통해 bg-white를 활성화 시킨다
    - expanded 상태일 경우 text 노출 아닐 경우 아이콘만 노출
*/

export default function Sidebar() {
    const isActive = true;

    return (
        <aside className="w-[20rem] bg-sidebar-primary">
            <div className="h-full flex flex-col">
                <div className="p-5">
                    <div className="flex pb-4 justify-between items-center">
                        <h1>
                            <Link href="/">
                                <Image src={MainLogo} alt="Mh Dev" />
                            </Link>
                        </h1>
                        <button type="button">
                            <PanelRight size={20} />
                            <span className="sr-only">사이드바 접기</span>
                        </button>
                    </div>
                    <nav>
                        <ul className="flex flex-col">
                            <li>
                                <Link
                                    href="/"
                                    className={`px-2 rounded-md h-10 flex items-center gap-2 ${isActive && 'bg-white'}`}
                                >
                                    <House />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/project"
                                    className="px-2 rounded-md h-10 flex items-center gap-2"
                                >
                                    <SquareChartGantt />
                                    <span>Project</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/guestbook"
                                    className="px-2 rounded-md h-10 flex items-center gap-2"
                                >
                                    <NotebookPen />
                                    <span>Guestbook</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ui"
                                    className="px-2 rounded-md h-10 flex items-center gap-2"
                                >
                                    <Component />
                                    <span>User Interface</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/board"
                                    className="px-2 rounded-md h-10 flex items-center gap-2"
                                >
                                    <Newspaper />
                                    <span>Board</span>
                                </Link>
                            </li>
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
