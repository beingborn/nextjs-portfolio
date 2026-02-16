import { useTabContext } from '@/components/ui/Tab/TabContext';
import { TabPanelType } from '@/components/ui/Tab/TabTypes';

const TabPanel = ({ children, value, className }: TabPanelType) => {
    const { activeTab } = useTabContext();

    return (
        <div
            role="tabpanel"
            id={value}
            className={`${className} ${activeTab === value ? 'block' : 'hidden'}`}
        >
            {children}
        </div>
    );
};

export default TabPanel;
