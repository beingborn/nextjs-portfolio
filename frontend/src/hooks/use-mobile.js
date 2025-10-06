import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

// JS 버전 훅만 유지
export function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(undefined);

    React.useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener('change', onChange);

        // 초기 상태 설정
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        return () => mql.removeEventListener('change', onChange);
    }, []);

    return !!isMobile;
}
