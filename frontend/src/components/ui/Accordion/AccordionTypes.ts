type AccordionVariant = 'text' | 'line' | 'nostyle';

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
}

export interface AccordionHeaderType {
    children?: React.ReactNode;
    value: string;
    expandIcon?: React.ReactNode;
    collapseIcon?: React.ReactNode;
}

export interface AccordionBodyType {
    children?: React.ReactNode;
    value: string;
}
