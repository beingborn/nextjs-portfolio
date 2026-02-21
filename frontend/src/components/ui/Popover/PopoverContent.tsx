import { usePopoverContext } from '@/components/ui/Popover/PopoverContext';
import { PopoverContentType } from '@/components/ui/Popover/PopoverTypes';
import { X } from 'lucide-react';

const PopoverContent = ({ children, title, className }: PopoverContentType) => {
    const { isOpen, close } = usePopoverContext();

    return (
        <div
            className={
                isOpen
                    ? `shadow-md z-popover block absolute bg-white border border-border-primary-500 left-1 top-[calc(100%+4px)] ${className}`
                    : 'hidden'
            }
        >
            <div
                className={`flex pb-2 ${title ? 'justify-between border-b border-b-border-primary-300 mb-2' : 'justify-end'}`}
            >
                {title && <h2 className="text-xl font-semibold">{title}</h2>}
                <button type="button" onClick={() => close()} title="닫기">
                    <X />
                </button>
            </div>

            {children}
        </div>
    );
};

export default PopoverContent;
