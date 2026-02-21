import PopoverContent from '@/components/ui/Popover/PopoverContent';
import { PopoverContext } from '@/components/ui/Popover/PopoverContext';
import PopoverTrigger from '@/components/ui/Popover/PopoverTrigger';
import { useEffect, useRef, useState } from 'react';
interface PopoverProviderType {
    children?: React.ReactNode;
}

const PopoverProvider = ({ children }: PopoverProviderType) => {
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
            <div ref={popoverRef} className="relative">
                {children}
            </div>
        </PopoverContext.Provider>
    );
};

PopoverProvider.Trigger = PopoverTrigger;
PopoverProvider.Content = PopoverContent;

export default PopoverProvider;
