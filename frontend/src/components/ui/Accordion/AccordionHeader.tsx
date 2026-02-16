import { useAccordionContext } from '@/components/ui/Accordion/AccordionContext';
import { AccordionHeaderType } from '@/components/ui/Accordion/AccordionTypes';
import { AccordionHeaderVariants } from '@/components/ui/Accordion/AccordionVariants';
import { cn } from '@/utils/style';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionHeader = ({
    children,
    value,
    expandIcon = <ChevronUp />,
    collapseIcon = <ChevronDown />,
    className,
}: AccordionHeaderType) => {
    const { variant, activeAccordion, setActiveAccordion } = useAccordionContext();
    const isExpanded = activeAccordion.includes(value);

    return (
        <h4 className="h-full">
            <button
                type="button"
                className="w-full transition-colors rounded-sm hover:bg-primary-100"
                aria-expanded={isExpanded}
                id={value + '-header'}
                aria-controls={value + '-body'}
                onClick={() => setActiveAccordion(value)}
            >
                <div className={cn(AccordionHeaderVariants({ variant }), className)}>
                    {children}

                    <span className="ml-auto">
                        {expandIcon && isExpanded && expandIcon}
                        {collapseIcon && !isExpanded && collapseIcon}
                    </span>
                </div>
            </button>
        </h4>
    );
};

export default AccordionHeader;
