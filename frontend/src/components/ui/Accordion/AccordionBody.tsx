import { useAccordionContext } from '@/components/ui/Accordion/AccordionContext';
import { AccordionBodyType } from '@/components/ui/Accordion/AccordionTypes';
import { AccordionBodyVariants } from '@/components/ui/Accordion/AccordionVariants';
import { cn } from '@/utils/style';

const AccordionBody = ({ children, value }: AccordionBodyType) => {
    const { variant, activeAccordion } = useAccordionContext();
    const isExpanded = activeAccordion.includes(value);

    return (
        <div className={cn(AccordionBodyVariants({ variant, isExpanded: isExpanded }))}>
            <div
                className="overflow-hidden"
                role="region"
                aria-labelledby={value + '-header'}
                id={value + '-body'}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionBody;
