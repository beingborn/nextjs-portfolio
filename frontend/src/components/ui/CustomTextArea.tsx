import { cn } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, TextareaHTMLAttributes } from 'react';

const textAreaVariants = cva(
    'bg-white outline-offset-0 w-full rounded-md focus:outline-secondary-100 border border-border-primary-500 px-2 py-2 placeholder:text-text-sub',
    {
        variants: {
            size: {
                sm: 'h-24',
                md: 'h-32',
                lg: 'h-40',
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

const textAreaMessageVariants = cva('text-sm', {
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

interface TextAreaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
        VariantProps<typeof textAreaVariants> {
    textAreaName?: string;
    disabled?: boolean;
    label?: string;
    className?: string;
    fullWidth?: boolean;
    message?: string;
    placeholder?: string;
    children?: React.ReactNode;
}

export type TextAreaState = VariantProps<typeof textAreaVariants>['state'];

const CustomTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            textAreaName,
            disabled,
            label,
            size,
            fullWidth = false,
            state = 'default',
            placeholder,
            message = '',
            children,
            className,
            ...rest
        },
        ref,
    ) => {
        return (
            <div className={`relative flex flex-col gap-2 items-start ${fullWidth && 'w-full'}`}>
                {label && <label htmlFor={textAreaName}>{label}</label>}
                <textarea
                    ref={ref}
                    placeholder={placeholder}
                    className={cn(
                        textAreaVariants({ size, isDisabled: disabled, state }),
                        'resize-none',
                        className,
                    )}
                    disabled={disabled}
                    id={textAreaName || ''}
                    name={textAreaName}
                    {...rest}
                />
                {children}
                {state !== 'default' && message && (
                    <p className={cn(textAreaMessageVariants({ state }))}>{message}</p>
                )}
            </div>
        );
    },
);

CustomTextArea.displayName = 'CustomTextArea';

export default CustomTextArea;
