'use client';

import { portfolioConfig } from 'portfolio.config.js';

const Footer = () => {
    return (
        <footer className="bg-bg-lighter flex flex-col items-end gap-4 p-4 w-full mt-auto">
            <ul className="flex gap-4 items-center">
                {Object.entries(portfolioConfig.social).map(([key, value]) => {
                    const isEmail = key === 'email';
                    const iconSrc = `/icon/ico_${key}.png`;

                    return (
                        <li key={key} className="flex items-center gap-2">
                            <img
                                width="32"
                                height="32"
                                src={isEmail ? '/icon/ico_email.png' : iconSrc}
                                alt={isEmail ? '이메일 주소' : `${key} 링크 연결`}
                            />
                            {isEmail ? (
                                <>
                                    {key} : {value}
                                </>
                            ) : (
                                <a href={value} target="_blank" rel="noopener noreferrer">
                                    {key}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
            <p className="text-text-pri">{portfolioConfig.copyright}</p>
        </footer>
    );
};

export default Footer;
