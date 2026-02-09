import BaseLayout from '@/app/_layout/BaseLayout';
import localFont from 'next/font/local';
import '../styles/globals.css';

const pretendard = localFont({
    src: '../assets/fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '100 900',
    variable: '--font-pretendard',
});

export const metadata = {
    title: {
        template: '%s | Mhlee',
        default: 'Mhlee Portfolio',
    },
    generator: 'Next.js',
    applicationName: 'Mhlee Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'frontend portfolio'],
    authors: [{ name: '이민혁', url: 'https://nextjs.org' }],
    publisher: '이민혁',
    icons: {
        icon: '/images/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="ko"
            className={`${pretendard.variable} h-full scroll-smooth text-text-pri font-medium min-h-full`}
        >
            <body className={`${pretendard.className} antialiased h-full`}>
                <div id="portal"></div>
                <BaseLayout>{children}</BaseLayout>
            </body>
        </html>
    );
}
