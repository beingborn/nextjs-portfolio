import { tabVariants } from '@/components/ui/Tab/TabVariants';
import { VariantProps } from 'class-variance-authority';

export type TabVariant = 'text' | 'line' | 'contained';

export interface TabContextType {
    activeTab: string;
    defaultActiveTab: string;
    variant: TabVariant;
    setActiveTab: (tab: string) => void;
}

export interface TabProviderType {
    children?: React.ReactNode;
    variant?: TabVariant;
    defaultActiveTab: string;
}

export interface TabType extends VariantProps<typeof tabVariants> {
    value: string;
    children?: React.ReactNode;
    className?: string;
}

export interface TabPanelType {
    value: string;
    children?: React.ReactNode;
}
