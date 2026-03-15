'use client';

import { Breadcrumbs, Header, Sidebar } from '@/components/layout';
import { usePathname } from 'next/navigation';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const path = pathname.split('/');
    const page = path.at(-1);
    const isHome = page == '';
    const isLogin = pathname.includes('login');

    return (
        <>
            <a href="#container" className="skip-navigation">
                본문바로가기
            </a>

            <div id="wrap" className="flex h-full">
                <Sidebar />
                {!isLogin ? (
                    <main className="h-full grow relative basis-0 flex flex-col" id="container">
                        <Header />
                        <div
                            className="bg-bg-surface overflow-hidden shadow-lg w-full h-full grow"
                            id="contents-wrap"
                        >
                            <div className="overflow-auto w-full rounded-tl-2xl px-10 py-8 h-full bg-white">
                                <div className="max-w-7xl ">
                                    {!isHome && <Breadcrumbs />}
                                    {children}
                                </div>
                            </div>
                        </div>
                    </main>
                ) : (
                    children
                )}
            </div>
        </>
    );
}
