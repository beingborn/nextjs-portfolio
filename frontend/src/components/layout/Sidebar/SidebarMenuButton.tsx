import useSidebarStore from '@/store/sidebar';
import Link from 'next/link';

interface Props {
    name: string;
    icon: React.ReactNode;
    href: string;
    isActive: boolean;
}

export default function SidebarMenuButton({ name, icon, href, isActive }: Props) {
    const { expanded } = useSidebarStore();

    return (
        <Link
            className={`px-2 rounded-md h-10 flex items-center gap-2 ${isActive && 'bg-white'}`}
            href={href}
        >
            {icon}
            {expanded && <span>{name}</span>}
        </Link>
    );
}
