'use client';

import { usePathname } from 'next/navigation';
import { Breadcrumbs, Footer, Header } from './index.js';

export default function BaseLayout({ children }) {
    const pathname = usePathname();
    const path = pathname.split('/');
    const page = path.at(-1);
    const isHome = page == '';
    const isLogin = pathname.includes('login');

    return (
        <div id="wrap" className="flex h-full">
            {/* Sidebar */}
            <aside></aside>
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
