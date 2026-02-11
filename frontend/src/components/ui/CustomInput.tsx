import { cn } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';

const inputVariants = cva(
    'bg-white outline-offset-0  w-full rounded-md focus:outline-secondary-100 border-border-primary-500 px-2 placeholder:text-text-sub',
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

const inputMessageVariants = cva('text-sm', {
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

/* 기본 타입으로 Size가 있어 Omit으로 타입해제 */
interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
        VariantProps<typeof inputVariants> {
    inputName?: string;
    disabled?: boolean;
    label?: string;
    className?: string;
    fullWidth?: boolean;
    message?: string;
    placeholder?: string;
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            inputName,
            type = 'text',
            disabled,
            label,
            size,
            fullWidth = false,
            state,
            placeholder,
            message = '',
            className,
            ...rest
        },
        ref,
    ) => {
        return (
            <div className={`flex flex-col gap-2 items-start ${fullWidth && 'w-full'}`}>
                {label && <label htmlFor={inputName}>{label}</label>}
                <input
                    ref={ref}
                    placeholder={placeholder}
                    className={cn(inputVariants({ size, isDisabled: disabled, state }), className)}
                    disabled={disabled}
                    type={type}
                    id={inputName || ''}
                    name={inputName}
                    {...rest}
                />
                {state !== 'default' && message && (
                    <p className={cn(inputMessageVariants({ state }))}>{message}</p>
                )}
            </div>
        );
    },
);

// React Devtools 디버깅용
CustomInput.displayName = 'CustomInput';

export default CustomInput;
