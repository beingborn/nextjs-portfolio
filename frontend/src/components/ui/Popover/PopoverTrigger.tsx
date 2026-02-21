import { usePopoverContext } from '@/components/ui/Popover/PopoverContext';
import { PopoverTriggerType } from '@/components/ui/Popover/PopoverTypes';

const PopoverTrigger = ({ children, className }: PopoverTriggerType) => {
    const { open } = usePopoverContext();

    return (
        <button className={className} onClick={() => open()}>
            {children}
        </button>
    );
};

export default PopoverTrigger;
