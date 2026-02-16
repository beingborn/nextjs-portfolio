import AccordionBody from '@/components/ui/Accordion/AccordionBody';
import { AccordionContext } from '@/components/ui/Accordion/AccordionContext';
import AccordionHeader from '@/components/ui/Accordion/AccordionHeader';
import AccordionItem from '@/components/ui/Accordion/AccordionItem';
import { AccordionProviderType } from '@/components/ui/Accordion/AccordionTypes';
import { useState } from 'react';

const AccordionProvider = ({
    children,
    type = 'single',
    defaultActiveAccordion,
    variant = 'line',
    className,
}: AccordionProviderType) => {
    const [activeAccordion, setActiveAccordion] = useState([defaultActiveAccordion]);

    const handleSelectActiveAccordion = (accordionId: string) => {
        if (type == 'single') {
            setActiveAccordion((prevValue) => {
                if (prevValue.includes(accordionId)) {
                    return prevValue.filter((i) => i !== accordionId);
                } else {
                    const selectedArray = prevValue.filter((i) => i == accordionId);
                    return [...selectedArray, accordionId];
                }
            });
        }

        if (type == 'multi') {
            // type Multi
            setActiveAccordion((prevValue) => {
                if (!prevValue.includes(accordionId)) {
                    return [...prevValue, accordionId];
                } else {
                    return prevValue.filter((i) => i !== accordionId);
                }
            });
        }
    };

    return (
        <AccordionContext.Provider
            value={{
                activeAccordion,
                setActiveAccordion: handleSelectActiveAccordion,
                defaultActiveAccordion,
                variant,
            }}
        >
            <div className={`flex flex-col py-1 ${className}`}>{children}</div>
        </AccordionContext.Provider>
    );
};

AccordionProvider.Item = AccordionItem;
AccordionProvider.Header = AccordionHeader;
AccordionProvider.Body = AccordionBody;

export default AccordionProvider;
