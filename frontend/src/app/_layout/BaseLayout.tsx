'use client';

import { Breadcrumbs, Footer, Header, Sidebar } from '@/components/layout';
import { usePathname } from 'next/navigation';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const path = pathname.split('/');
    const page = path.at(-1);
    const isHome = page == '';
    const isLogin = pathname.includes('login');

    return (
        <div id="wrap" className="flex h-full">
            {/* Sidebar */}
            <Sidebar />
            {!isLogin ? (
                <main className="grow relative basis-0 flex flex-col" id="container">
                    <Header />
                    <div className="p-8" id="contents-wrap">
                        {!isHome && <Breadcrumbs />}
                        {children}
                    </div>
                    <Footer />
                </main>
            ) : (
                children
            )}
        </div>
    );
}
