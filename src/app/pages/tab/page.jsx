import { Tab, TabButton, TabContent, TabList, TabPanel } from '../../components/common';

export default function TabTestPage() {
    return (
        <>
            <Tab defaultValue="tab1">
                <TabList className="flex gap-2">
                    <TabButton
                        activeStyle="bg-blue-500 font-bold text-white"
                        className="flex justify-center items-center p-2 border border-border-pri"
                        value="tab1"
                    >
                        탭1
                    </TabButton>
                    <TabButton
                        activeStyle="bg-blue-500 font-bold text-white"
                        className="flex justify-center items-center p-2 border border-border-pri"
                        value="tab2"
                    >
                        탭2
                    </TabButton>
                    <TabButton
                        activeStyle="bg-blue-500 font-bold text-white"
                        className="flex justify-center items-center p-2 border border-border-pri"
                        value="tab3"
                    >
                        탭3
                    </TabButton>
                    <TabButton
                        activeStyle="bg-blue-500 font-bold text-white"
                        className="flex justify-center items-center p-2 border border-border-pri"
                        value="tab4"
                    >
                        탭4
                    </TabButton>
                </TabList>
                <TabContent>
                    <div className="p-8 border border-border-pri mt-8">
                        <TabPanel value="tab1">탭1 콘텐츠</TabPanel>
                        <TabPanel value="tab2">탭2 콘텐츠</TabPanel>
                        <TabPanel value="tab3">탭3 콘텐츠</TabPanel>
                        <TabPanel value="tab4">탭4 콘텐츠</TabPanel>
                    </div>
                </TabContent>
            </Tab>
        </>
    );
}
