import { X } from 'lucide-react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

interface PopoverContextType {
    children?: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

interface PopoverProviderType {
    children?: React.ReactNode;
}

export const PopoverProvider = ({ children }: PopoverProviderType) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Event 타입 단언
            const target = event.target as Node;

            if (popoverRef.current && !popoverRef.current.contains(target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Clean Up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <PopoverContext.Provider value={{ isOpen, open: handleOpen, close: handleClose }}>
            <div ref={popoverRef} className="relative border">
                {children}
            </div>
        </PopoverContext.Provider>
    );
};

export const usePopoverContext = () => {
    const context = useContext(PopoverContext);

    if (!context) throw new Error('Popover Context is Not Valid');

    return context;
};

interface PopoverTriggerType {
    children?: React.ReactNode;
    className?: string;
}

export const PopoverTrigger = ({ children, className }: PopoverTriggerType) => {
    const { isOpen, open } = usePopoverContext();

    return (
        <button className={className} onClick={() => open()}>
            {isOpen ? '오픈' : '오픈아님'}
            {children}
        </button>
    );
};

/* 
    Popover Content

    - isOpen = true일 시 display block 
    - Close 버튼 실행 
    - Absoulte 위치에 따라 토글 위치 변경
*/

export const PopoverContent = () => {
    const { isOpen, close } = usePopoverContext();

    return (
        <div className={isOpen ? 'block absolute right-0 top-0' : 'hidden'}>
            콘텐츠
            <button type="button" onClick={() => close()}>
                <X />
            </button>
        </div>
    );
};
