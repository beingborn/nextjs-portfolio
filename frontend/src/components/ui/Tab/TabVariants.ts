import { cva } from 'class-variance-authority';

const tabVariants = cva('text-lg py-2 px-4 items-center justify-center', {
    variants: {
        variant: {
            contained: 'rounded-lg text-text-sub',
            line: 'border-b-2 bg-transparent text-text-sub',
            text: 'bg-transparent text-text-sub',
        },
        isActive: {
            true: 'font-bold text-primary-500',
            false: '',
        },
    },
    compoundVariants: [
        { variant: 'contained', isActive: true, className: 'bg-primary-100' },
        { variant: 'line', isActive: true, className: 'border-primary-500' },
        { variant: 'text', isActive: true, className: '' },
    ],

    defaultVariants: {
        variant: 'contained',
    },
});

export { tabVariants };
