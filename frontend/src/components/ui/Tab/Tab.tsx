import { useTabContext } from '@/components/ui/Tab/TabContext';
import { TabType } from '@/components/ui/Tab/TabTypes';
import { tabVariants } from '@/components/ui/Tab/TabVariants';
import { cn } from '@/utils/style';

const Tab = ({ value, children, className }: TabType) => {
    const { variant, activeTab, setActiveTab } = useTabContext();
    const isSelected = activeTab === value;

    return (
        <button
            role="tab"
            onClick={() => setActiveTab(value)}
            aria-selected={isSelected || false}
            className={cn(tabVariants({ variant, isActive: isSelected }), className)}
            id={value}
        >
            {children}
        </button>
    );
};

export default Tab;
