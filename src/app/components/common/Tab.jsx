'use client';

import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const Tab = ({ children, defaultValue, variant = 'primary' }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    function handleSelect(value) {
        setSelectedValue(value);
    }

    return (
        <TabContext.Provider value={{ selectedValue, handleSelect, variant }}>
            {children}
        </TabContext.Provider>
    );
};

const useTabContext = () => {
    const context = useContext(TabContext);

    if (!context) {
        throw new Error('Tab Context Not Valid');
    }

    return context;
};

function TabList({ children, className }) {
    const { variant } = useTabContext();

    const variantStyles = {
        primary: 'flex items-center gap-2',
        outline: 'flex items-center gap-4',
    };

    return (
        <div id="tab-list" className={cn(variantStyles[variant], className)}>
            {children}
        </div>
    );
}

function TabButton({ children, className, value }) {
    const { handleSelect, selectedValue, variant } = useTabContext();
    const isActive = selectedValue == value;

    const variantStyles = cva(
        // 기본 공통 적용
        `p-2 cursor-pointer rounded-sm flex justify-center items-center border ${className}`,
        {
            variants: {
                variant: {
                    primary: 'border-border-pri bg-gray-100',
                    outline: 'border-border-pri sec bg-white',
                },
                active: {
                    true: '',
                    false: '',
                },
            },
            compoundVariants: [
                {
                    variant: 'primary',
                    active: true,
                    class: 'bg-pri text-white',
                },
                {
                    variant: 'outline',
                    active: true,
                    class: 'font-bold border-border-pri',
                },
            ],
            defaultVariants: {
                active: false,
            },
        },
    );

    const tabClasses = variantStyles({ variant: variant, active: isActive });

    return (
        <div id="tab-button" className={tabClasses} onClick={() => handleSelect(value)}>
            {children}
        </div>
    );
}

function TabContent({ children }) {
    return <div id="tab-content">{children}</div>;
}

function TabPanel({ children, className, value }) {
    const { selectedValue } = useTabContext();

    return (
        <>
            {value === selectedValue && (
                <div id="tab-panel" className={className}>
                    {children}
                </div>
            )}
        </>
    );
}

export { Tab, TabButton, TabContent, TabList, TabPanel };
