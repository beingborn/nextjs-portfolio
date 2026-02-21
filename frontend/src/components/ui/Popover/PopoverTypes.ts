export interface PopoverContextType {
    children?: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export interface PopoverProviderType {
    children?: React.ReactNode;
}

export interface PopoverTriggerType {
    children?: React.ReactNode;
    className?: string;
}

export interface PopoverContentType {
    children?: React.ReactNode;
    className?: string;
    title?: string;
}
