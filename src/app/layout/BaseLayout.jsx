'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { AppSidebar } from '../../components/ui/app-sidebar.jsx';
import { Header, Footer, Breadcrumbs } from './index.js';

export default function BaseLayout({ children }) {
    const pathname = usePathname();
    const path = pathname.split('/');
    const page = path.at(-1);
    const isHome = page == '';
    const isLogin = pathname.includes('login');

    return (
        <div id="wrap" className="flex h-full">
            {!isLogin ? (
                <SidebarProvider>
                    <AppSidebar />
                    <main className="grow relative basis-0 flex flex-col" id="container">
                        <Header />
                        <div className="p-8" id="contents-wrap">
                            {!isHome && <Breadcrumbs />}
                            {children}
                        </div>
                        <Footer />
                    </main>
                </SidebarProvider>
            ) : (
                children
            )}
        </div>
    );
}
