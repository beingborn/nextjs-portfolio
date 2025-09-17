'use client';

import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

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
        title: '방명록',
        url: '#',
        icon: Settings,
    },
    {
        title: '컴포넌트',
        url: '#',
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Mhlee Portfolio</SidebarGroupLabel>
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
