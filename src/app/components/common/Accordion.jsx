'use client';

import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

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
    const contentRef = useRef(null);
    const isSelected = selectedValue.includes(value);
    const [contentHeight, setContentHeight] = useState('0px');

    const wrapperVariantStyles = {
        primary: 'transition-all duration-300 px-4 py-8 border border-border-pri rounded-md',
    };

    useEffect(() => {
        if (isSelected && contentRef.current) {
            contentRef.current.parentElement.classList.remove('hidden');

            setContentHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setContentHeight(`0px`);
        }

        if (!isSelected && contentRef.current) {
            setTimeout(() => {
                contentRef.current.parentElement.classList.add('hidden');
            }, 150);
        }
    }, [isSelected]);

    return (
        <div
            id={`accordion-${value}-panel`}
            role="region"
            aria-labelledby={value}
            className="hidden"
        >
            <div
                ref={contentRef}
                className={cn(wrapperVariantStyles[variant])}
                style={{ height: contentHeight }}
            >
                {children}
            </div>
        </div>
    );
}

export { AccordionContent, AccordionItem, AccordionTrigger, AccordionWrapper };
