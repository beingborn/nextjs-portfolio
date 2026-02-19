import { PopoverContextType } from '@/components/ui/Popover/PopoverTypes';
import { createContext, useContext } from 'react';

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopoverContext = () => {
    const context = useContext(PopoverContext);

    if (!context) throw new Error('Popover Context is Not Valid');

    return context;
};

export { PopoverContext, usePopoverContext };
