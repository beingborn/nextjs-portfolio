'use client';

import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { createContext, useContext, useRef, useState } from 'react';

const AccordionContext = createContext();

const AccordionWrapper = ({ children, type = 'single', defaultValue, variant = 'primary' }) => {
    const [selectedValue, setSelectedValue] = useState([defaultValue]);

    const wrapperVariantStyles = {
        primary: 'flex flex-col gap-4',
    };

    function handleSelect(value) {
        // type Single 일때

        if (type == 'single') {
            setSelectedValue((prevValue) => {
                if (prevValue.includes(value)) {
                    return prevValue.filter((i) => i !== value);
                } else {
                    const selectedArray = prevValue.filter((i) => i == value);
                    return [...selectedArray, value];
                }
            });
        }

        if (type == 'multi') {
            // type Multi
            setSelectedValue((prevValue) => {
                if (!prevValue.includes(value)) {
                    return [...prevValue, value];
                } else {
                    return prevValue.filter((i) => i !== value);
                }
            });
        }
    }

    return (
        <AccordionContext.Provider value={{ selectedValue, handleSelect, variant }}>
            <div className={cn(wrapperVariantStyles[variant])}>{children}</div>
        </AccordionContext.Provider>
    );
};

const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error('Tab Context Not Valid');
    }

    return context;
};

const AccordionItemContext = createContext();

const useAccordionItemContext = () => {
    const context = useContext(AccordionItemContext);

    if (!context) {
        throw new Error('Tab Context Not Valid');
    }

    return context;
};

function AccordionItem({ children, value }) {
    return (
        <AccordionItemContext value={{ value }}>
            <div className="flex flex-col gap-2">{children}</div>
        </AccordionItemContext>
    );
}

function AccordionTrigger({ children }) {
    const { selectedValue, handleSelect, variant } = useAccordionContext();
    const { value } = useAccordionItemContext();
    const isActive = selectedValue.includes(value);

    const titleVariantStyles = {
        primary: 'text-xl font-bold',
    };

    const wrapperVariantStyles = {
        primary:
            'p-4 bg-blue-100 border-l border-border-pri rounded-md cursor-pointer flex items-center justify-between',
    };

    return (
        <h3 className={cn(wrapperVariantStyles[variant])}>
            <span className={cn(titleVariantStyles[variant])} id="acco-title">
                {children}
            </span>
            <button
                type="button"
                aria-expanded={isActive}
                aria-controls={value}
                id={`accordion-${value}`}
                onClick={() => handleSelect(value)}
            >
                {selectedValue.includes(value) ? <ChevronUp /> : <ChevronDown />}
            </button>
        </h3>
    );
}

function AccordionContent({ children }) {
    const { selectedValue, variant } = useAccordionContext();
    const { value } = useAccordionItemContext();
    const ref = useRef(null);
    const isSelected = selectedValue.includes(value);

    const wrapperVariantStyles = {
        primary: 'px-4 py-8 border border-border-pri rounded-md',
    };

    return (
        <div
            className="transition-all 500ms overflow-y-hidden"
            style={{ height: isSelected ? ref.current?.offsetHeight || 0 : 0 }}
        >
            <div
                id={`accordion-${value}-panel`}
                role="region"
                aria-labelledby={value}
                ref={ref}
                className={cn(wrapperVariantStyles[variant])}
            >
                {children}
            </div>
        </div>
    );
}

export { AccordionContent, AccordionItem, AccordionTrigger, AccordionWrapper };
