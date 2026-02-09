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
                        <div className="pl-1 bg-bg-surface h-full grow" id="contents-wrap">
                            <div className="p-8 w-full h-full rounded-tl-2xl shadow-lg bg-white">
                                {!isHome && <Breadcrumbs />}
                                {children}
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
