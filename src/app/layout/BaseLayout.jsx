'use client';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { portfolioConfig } from '../../../portfolio.config.js';
import { AppSidebar } from '../../components/ui/app-sidebar.jsx';
import BreadCrumbs from './breadcrumbs/Breadcrumb.tsx';

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
                        <header className="min-h-[60px] sticky top-0 text-point flex justify-between items-center px-4 bg-zinc-200">
                            <div className="flex items-center gap-1">
                                <SidebarTrigger />
                                <span>사이드바 접기</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <a href="/pages/login">로그인</a>
                                <a href="#">회원가입</a>
                            </div>
                        </header>
                        <div className="p-8" id="contents-wrap">
                            {!isHome && <BreadCrumbs />}
                            {children}
                        </div>
                        <footer className="bg-bg-lighter flex flex-col items-end gap-4 p-4 w-full mt-auto">
                            <ul className="flex gap-4 items-center">
                                {Object.keys(portfolioConfig.social).map((key) =>
                                    key === 'email' ? (
                                        <li key="email" className="flex items-center gap-2">
                                            <img
                                                width="32"
                                                height="32"
                                                src={`/icon/ico_email.png`}
                                                alt={`이메일 주소`}
                                            />
                                            {key} : {portfolioConfig.social['email']}
                                        </li>
                                    ) : (
                                        <li>
                                            <a
                                                className="flex items-center gap-2"
                                                href={portfolioConfig.social[key]}
                                                key={key}
                                                target="_blank"
                                            >
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src={`/icon/ico_${key}.png`}
                                                    alt={`${key} 링크 연결`}
                                                />
                                                {key}
                                            </a>
                                        </li>
                                    ),
                                )}
                            </ul>
                            <p className="text-text-pri">{portfolioConfig.copyright}</p>
                        </footer>
                    </main>
                </SidebarProvider>
            ) : (
                children
            )}
        </div>
    );
}
