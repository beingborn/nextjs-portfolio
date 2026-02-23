import Image from 'next/image';
import { portfolioConfig } from 'portfolio.config.ts';

const Header = () => {
    return (
        <header className="bg-bg-surface min-h-20 sticky z-50 top-0 flex items-center pl-8">
            <div className="flex-col flex items-start gap-1">
                <span className="text-text-sub">NextJS + Django + Zustand</span>
                <p className="text-xs">{portfolioConfig.copyright}</p>
            </div>

            <ul className="ml-4 flex gap-4 items-center">
                {Object.entries(portfolioConfig.social).map(([key, value]) => {
                    const isEmail = key === 'email';
                    const iconSrc = `/icon/ico_${key}.png`;

                    return (
                        <li key={key} className="flex items-center gap-2">
                            <a
                                href={isEmail ? 'mailto:mindol0708@gmail.com' : value}
                                title={`${key} 새 창 열림`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    width="28"
                                    height="28"
                                    src={isEmail ? '/icon/ico_email.png' : iconSrc}
                                    alt={''}
                                />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};

export default Header;
