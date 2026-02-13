import { useTabContext } from '@/components/ui/Tab/TabContext';
import { TabType } from '@/components/ui/Tab/TabTypes';

const Tab = ({ value, children }: TabType) => {
    const { activeTab, setActiveTab } = useTabContext();

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`${activeTab === value && 'text-amber-800'}`}
            id={value}
        >
            {children}
        </button>
    );
};

export default Tab;
