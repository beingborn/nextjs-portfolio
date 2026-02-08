'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const path = pathname.split('/');
    const segments = path.filter((element) => element !== 'pages');

    let url = '';

    const BreadCrumbLinks = segments.map((segment, i) => {
        url += segment;

        return (
            <Link key={i} href={`/pages/${url}`}>
                {segment === '' ? 'Home' : segment}
                {i < segments.length - 1 && <>&gt;</>}
            </Link>
        );
    });

    return <div className="flex gap-2 mb-4">{BreadCrumbLinks}</div>;
}
