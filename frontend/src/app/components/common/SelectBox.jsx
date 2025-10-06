import { ChevronDown } from 'lucide-react';
import { useId } from 'react';

export default function SelectBox({
    options,
    label,
    placeholder,
    selectedValue,
    children,
    error,
    disabled,
    onChange,
}) {
    const uniqueId = label ? useId() : null;

    return (
        <div className="relative">
            {label && (
                <label htmlFor={uniqueId} className="text-xs">
                    {label}
                </label>
            )}
            <select
                id={uniqueId}
                value={selectedValue}
                onChange={onChange}
                disabled={disabled}
                className="w-full appearance-none pl-4 pr-12 h-[40px] border border-border-pri focus:outline-none focus:border-pri"
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options
                    ? options.map((option) => (
                          <option
                              key={`select_${option.key}`}
                              value={option.key}
                              data-name={option.value}
                          >
                              {option.value}
                          </option>
                      ))
                    : children}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <ChevronDown />
            </div>
            {error && <p className="absolute mt-0.5 text-xs text-[#F44336]">{error}</p>}
        </div>
    );
}
