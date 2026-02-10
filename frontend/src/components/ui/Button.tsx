import { cn } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

/* 
    주요 설계 포인트 

    1. 공통 클래스 정의 
    2. 기본 Props 설정 
    3. Button 기본 제공 Attributes 타입 + VariantProps
*/

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-sm font-semibold transition-all',
    {
        variants: {
            variant: {
                contained: 'hover:brightness-90',
                outline: 'border-2 bg-transparent hover:bg-gray-100',
                text: 'bg-transparent hover:bg-gray-100',
            },
            intent: {
                primary: '',
                secondary: '',
            },
            size: {
                sm: 'px-2 py-1',
                md: 'px-4 py-2',
                lg: 'px-5 py-4',
            },
            fullWidth: {
                true: 'w-full',
                false: '',
            },
            loading: {
                true: 'text-text-disabled pointer-events-none',
                false: '',
            },

            isDisabled: {
                true: 'text-text-disabled pointer-events-none',
                false: '',
            },
        },
        compoundVariants: [
            // Contained
            { variant: 'contained', intent: 'primary', className: 'bg-primary-500 text-white' },
            { variant: 'contained', intent: 'secondary', className: 'bg-secondary-500 text-white' },

            // Loading
            {
                variant: 'contained',
                loading: true,
                className: 'bg-bg-disabled shadow-none border-border-pri text-text-sub',
            },
            // isDisabled
            {
                variant: 'contained',
                isDisabled: true,
                className: 'bg-bg-disabled shadow-none border-border-pri text-text-sub',
            },

            // Outline
            {
                variant: 'outline',
                intent: 'primary',
                className: 'border-primary-500 text-primary-500',
            },
            {
                variant: 'outline',
                intent: 'secondary',
                className: 'border-secondary-500 text-secondary-500',
            },

            // Text
            {
                variant: 'text',
                intent: 'primary',
                className: 'text-primary-500',
            },
        ],

        defaultVariants: {
            variant: 'contained',
            intent: 'primary',
            size: 'md',
            fullWidth: false,
            loading: false,
            isDisabled: false,
        },
    },
);

// 기본 Button Props (onClick ...) + VariantProps
interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export default function Button({
    type = 'button',
    disabled,
    variant,
    intent,
    size,
    fullWidth,
    loading,
    children,
    className,
    ...rest
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={loading || disabled}
            className={cn(
                buttonVariants({ variant, intent, size, fullWidth, loading, isDisabled: disabled }),
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
}
