import { useId } from 'react';

const Input = ({ type = 'text', icon, label, value, error, onChange, className, ...rest }) => {
    const uniqueId = label ? useId() : null;

    return (
        <div className="relative">
            {label && (
                <label htmlFor={uniqueId} className="text-m">
                    {label}
                </label>
            )}
            <input
                id={uniqueId}
                className={`p-2 border border-border-pri focus:outline-none focus:border-pri ${className}`}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete="off"
                {...rest}
            />
            {icon && <div className="absolute top-1/2 -translate-y-1/2 right-4">{icon}</div>}
            {error && <p className="absolute mt-0.5 text-xs text-[#F44336]">{error}</p>}
        </div>
    );
};

export default Input;
