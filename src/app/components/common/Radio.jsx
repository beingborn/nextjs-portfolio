'use client';

import { cn } from '@/lib/utils';
import { createContext, useContext } from 'react';

const RadioContext = createContext();

export function RadioGroup({ value, onChange, children, variant = 'primary' }) {
    const wrapperVariantStyles = {
        primary: 'flex items-center gap-2',
    };

    return (
        <RadioContext.Provider value={{ value, onChange, variant }}>
            <div className={cn(wrapperVariantStyles[variant])}>{children}</div>
        </RadioContext.Provider>
    );
}

const useRadioContext = () => {
    const context = useContext(RadioContext);

    if (!context) {
        throw new Error('Tab Context Not Valid');
    }

    return context;
};

export function Radio({ children, ...props }) {
    const { value, onChange, variant } = useRadioContext();

    const wrapperVariantStyles = {
        primary: 'flex items-center gap-1',
    };

    const itemVariantStyles = {
        primary: 'w-[20px] h-[20px] cursor-pointer',
    };

    return (
        <label className={wrapperVariantStyles[variant]}>
            <input
                className={itemVariantStyles[variant]}
                type="radio"
                value={props.value}
                checked={props.value === value}
                onChange={onChange}
            />
            {children}
        </label>
    );
}
