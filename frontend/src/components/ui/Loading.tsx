'use client';

import Spinner from '@/components/ui/Spinner';
import { useEffect } from 'react';

export default function Loading({ children }: { children?: React.ReactNode }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div id="loading" className="fixed left-0 top-0 z-loading w-full h-full bg-white/75">
            {!children && (
                <div className="w-full h-full relative">
                    <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col gap-2 items-center">
                        <Spinner size={100}></Spinner>
                        <p className="text-xl text-text-sub">...Loading</p>
                    </div>
                </div>
            )}
        </div>
    );
}
