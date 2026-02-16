import { useAccordionContext } from '@/components/ui/Accordion/AccordionContext';
import { AccordionHeaderType } from '@/components/ui/Accordion/AccordionTypes';

const AccordionHeader = ({ children, value, expandIcon, collapseIcon }: AccordionHeaderType) => {
    const { setActiveAccordion } = useAccordionContext();

    return (
        <h4>
            <button
                type="button"
                aria-expanded="true"
                id={value + '-header'}
                aria-controls={value + '-body'}
                onClick={() => setActiveAccordion(value)}
            >
                <div className="flex items-center justify-between">
                    {children}

                    {expandIcon && expandIcon}
                    {collapseIcon && collapseIcon}
                </div>
            </button>
        </h4>
    );
};

export default AccordionHeader;
