import Tab from '@/components/ui/Tab/Tab';
import { TabContext } from '@/components/ui/Tab/TabContext';
import TabPanel from '@/components/ui/Tab/TabPanel';
import { TabProviderType } from '@/components/ui/Tab/TabTypes';
import { useState } from 'react';

const TabProvider = ({ children, variant = 'contained', defaultActiveTab }: TabProviderType) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const handleSelectActiveTab = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <TabContext.Provider
            value={{ variant, defaultActiveTab, activeTab, setActiveTab: handleSelectActiveTab }}
        >
            <div className="flex gap-2 items-center">{children}</div>
        </TabContext.Provider>
    );
};

TabProvider.Button = Tab;
TabProvider.Panel = TabPanel;

export default TabProvider;
