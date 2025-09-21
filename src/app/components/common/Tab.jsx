'use client';

import { cn } from '@/lib/utils';
import { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const Tab = ({ children, defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    function handleSelect(value) {
        setSelectedValue(value);
    }

    return (
        <TabContext.Provider value={{ selectedValue, setSelectedValue, handleSelect }}>
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
    return (
        <div id="tab-list" className={className}>
            {children}
        </div>
    );
}

function TabButton({ children, className, activeStyle, value }) {
    const { handleSelect, selectedValue } = useTabContext();

    const isActive = selectedValue == value;

    return (
        <div
            id="tab-button"
            className={cn('cursor-pointer', isActive && activeStyle ? activeStyle : '', className)}
            onClick={() => handleSelect(value)}
        >
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
