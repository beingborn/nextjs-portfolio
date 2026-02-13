import { TabContextType } from '@/components/ui/Tab/TabTypes';
import { createContext, useContext } from 'react';

const TabContext = createContext<TabContextType | undefined>(undefined);

const useTabContext = () => {
    const context = useContext(TabContext);

    if (!context) {
        throw new Error('Tab Context is Not Valid');
    }

    return context;
};

export { TabContext, useTabContext };
