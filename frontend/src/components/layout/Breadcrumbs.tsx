import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const URLMAP: Record<string, string> = {
    project: '프로젝트',
    guestbook: '방명록',
    login: '로그인',
    about: '포트폴리오 스토리',
    ui: '컴포넌트',
    board: '게시판',
};

export default function Breadcrumbs() {
    const pathname = usePathname();
    const path = pathname.split('/');
    const segments = path.filter((element) => element !== 'pages');

    let url = '';

    const BreadCrumbLinks = segments.map((segment, i) => {
        url += segment;

        const isLast = i === segments.length - 1;
        const label = segment === '' ? '홈' : (URLMAP[segment] ?? segment);

        const content = (
            <>
                <p className={`${!isLast ? 'underline underline-offset-4' : ''}`}>{label}</p>
                {!isLast && <ChevronRight size={20} />}
            </>
        );

        return isLast ? (
            <span key={i}>{content}</span>
        ) : (
            <Link
                key={i}
                href={`/${url}`}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-800"
            >
                {content}
            </Link>
        );
    });

    return <div className="flex gap-2 mb-8">{BreadCrumbLinks}</div>;
}
