import { cva } from 'class-variance-authority';

const AccordionHeaderVariants = cva('flex items-center', {
    variants: {
        variant: {
            line: 'py-2 px-4 font-bold text-xl',
            nostyle: '',
        },
    },
    defaultVariants: {
        variant: 'line',
    },
});

const AccordionBodyVariants = cva(
    'relative grid transition-[grid-template-rows] duration-500 ease-in-out',
    {
        variants: {
            variant: {
                line: '',
                nostyle: '',
            },
            isExpanded: {
                true: 'grid-rows-[1fr]',
                false: 'grid-rows-[0fr]',
            },
        },

        defaultVariants: {
            variant: 'line',
        },
    },
);

export { AccordionBodyVariants, AccordionHeaderVariants };
