import { useAccordionContext } from '@/components/ui/Accordion/AccordionContext';
import { AccordionBodyType } from '@/components/ui/Accordion/AccordionTypes';
import { cn } from '@/utils/style';

const AccordionBody = ({ children, value }: AccordionBodyType) => {
    const { activeAccordion } = useAccordionContext();

    const isExpanded = activeAccordion.includes(value);

    return (
        <div
            className={cn(
                'relative grid transition-[grid-template-rows] duration-500 ease-in-out my-0.5',
                isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
        >
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
