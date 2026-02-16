import { AccordionContextType } from '@/components/ui/Accordion/AccordionTypes';
import { createContext, useContext } from 'react';

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) throw new Error('Accordion Context is Not Valid');

    return context;
};

export { AccordionContext, useAccordionContext };
