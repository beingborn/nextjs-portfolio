import { cn } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const selectVariants = cva(
    'bg-white outline-offset-0  w-full rounded-md focus:outline-secondary-100 border border-border-primary-500 px-2 placeholder:text-text-sub',
    {
        variants: {
            size: {
                sm: 'h-8',
                md: 'h-10',
                lg: 'h-14',
            },

            isDisabled: {
                true: 'bg-bg-disabled border-border-primary-500',
                false: '',
            },
            state: {
                default: '',
                success: 'ring-2 ring-success-500 focus:outline-success-500 outline-offset-1',
                info: 'ring-2 ring-info-500 focus:outline-info-500 outline-offset-1',
                warning: 'ring-2 ring-warning-500 focus:outline-warning-500 outline-offset-1',
                error: 'ring-2 ring-danger-500 focus:outline-danger-500 outline-offset-1',
            },
        },
        defaultVariants: {
            size: 'md',
            isDisabled: false,
            state: 'default',
        },
    },
);

const selectMessageVariants = cva('text-sm', {
    variants: {
        state: {
            default: '',
            success: 'text-success-500',
            info: 'text-info-500 ring-info-500',
            warning: 'text-warning-500',
            error: 'text-danger-500',
        },
    },
});

interface Options {
    label: string;
    value: string | number;
}

interface SelectProps extends VariantProps<typeof selectVariants> {
    options: Options[];
    label?: string;
    placeholder?: string;
    selectedValue?: string;
    children?: React.ReactNode;
    selectName?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    message?: string;
    disabled?: boolean;
    className?: string;
    fullWidth?: boolean;
}

export type SelectState = VariantProps<typeof selectVariants>['state'];

export default function SelectBox({
    size,
    options,
    label,
    placeholder,
    selectedValue,
    children,
    selectName,
    state,
    message,
    className,
    fullWidth,
    disabled,
    onChange,
}: SelectProps) {
    return (
        <div className={`relative flex flex-col gap-2 items-start ${fullWidth && 'w-full'}`}>
            {label && <label htmlFor={selectName}>{label}</label>}
            <select
                id={selectName}
                value={selectedValue}
                onChange={onChange}
                disabled={disabled}
                className={cn(selectVariants({ size, isDisabled: disabled, state }), className)}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options
                    ? options.map((option) => (
                          <option key={option.value} value={option.value}>
                              {option.label}
                          </option>
                      ))
                    : children}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <ChevronDown />
            </div>
            {state !== 'default' && message && (
                <p className={cn(selectMessageVariants({ state }))}>{message}</p>
            )}
        </div>
    );
}
