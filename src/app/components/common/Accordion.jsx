'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

const AccordionContext = createContext();

const AccordionWrapper = ({ children, type = 'single', defaultValue, variant = 'primary' }) => {
    const [selectedValue, setSelectedValue] = useState([defaultValue]);

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
            {children}
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
            <div>{children}</div>
        </AccordionItemContext>
    );
}

function AccordionTrigger({ children }) {
    const { selectedValue, handleSelect } = useAccordionContext();
    const { value } = useAccordionItemContext();

    return (
        <div className="cursor-pointer flex items-center justify-between">
            {children}
            <button type="button" onClick={() => handleSelect(value)}>
                {selectedValue.includes(value) ? <ChevronUp /> : <ChevronDown />}
            </button>
        </div>
    );
}

function AccordionContent({ children }) {
    const { selectedValue } = useAccordionContext();
    const { value } = useAccordionItemContext();
    const contentRef = useRef(null);
    const isSelected = selectedValue.includes(value);
    const [contentHeight, setContentHeight] = useState('0px');

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
        <div className="hidden">
            <div
                ref={contentRef}
                className="transition-all duration-300"
                style={{ height: contentHeight }}
            >
                {children}
            </div>
        </div>
    );
}

export { AccordionContent, AccordionItem, AccordionTrigger, AccordionWrapper };
