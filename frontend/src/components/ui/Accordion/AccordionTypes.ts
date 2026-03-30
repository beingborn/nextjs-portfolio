import { AccordionBodyVariants } from '@/components/ui/Accordion/AccordionVariants';
import { VariantProps } from 'class-variance-authority';

type AccordionVariant = 'line' | 'nostyle';

export interface AccordionContextType {
    activeAccordion: string[];
    defaultActiveAccordion: string;
    variant?: AccordionVariant;
    setActiveAccordion: (accordionId: string) => void;
}

export interface AccordionProviderType {
    activeAccordion?: string[];
    children?: React.ReactNode;
    defaultActiveAccordion: string;
    variant?: AccordionVariant;
    type: 'single' | 'multi';
    className?: string;
}

export interface AccordionHeaderType {
    children?: React.ReactNode;
    value: string;
    expandIcon?: React.ReactNode;
    collapseIcon?: React.ReactNode;
    className?: string;
}

export interface AccordionBodyType extends VariantProps<typeof AccordionBodyVariants> {
    children?: React.ReactNode;
    value: string;
}
