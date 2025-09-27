'use client';

import { Calendar, Home, Inbox, Search, Component, Book } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
    {
        title: '홈',
        url: '/',
        icon: Home,
    },
    {
        title: '프로젝트',
        url: '/pages/project',
        icon: Inbox,
    },
    {
        title: '게시판',
        url: '/pages/posts',
        icon: Calendar,
    },
    {
        title: '포트폴리오 제작기',
        url: '#',
        icon: Search,
    },
    {
        title: '컴포넌트',
        url: '/pages/ui',
        icon: Component,
    },
    {
        title: '방명록',
        url: '/pages/guestbook',
        icon: Book,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <div className="flex flex-col pb-2 border-b border-b-gray-500s">
                            <strong>Next.js + Django</strong> Mhlee Portfolio
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
