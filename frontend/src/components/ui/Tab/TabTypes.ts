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

export interface TabType {
    value: string;
    children?: React.ReactNode;
}

export interface TabPanelType {
    value: string;
    children?: React.ReactNode;
}
