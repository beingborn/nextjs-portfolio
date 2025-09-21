import { Tab, TabButton, TabContent, TabList, TabPanel } from '../../components/common';

export default function TabTestPage() {
    return (
        <div className="flex flex-col gap-8">
            <section>
                <h2 className="mb-2 font-bold">Tab - Primary</h2>
                <Tab variant="primary" defaultValue="tab1">
                    <TabList>
                        <TabButton value="tab1">개인 프로젝트</TabButton>
                        <TabButton value="tab2">팀 프로젝트</TabButton>
                        <TabButton value="tab3">프로 프로젝트</TabButton>
                        <TabButton value="tab4">아마추어 프로젝트</TabButton>
                    </TabList>
                    <TabContent>
                        <div className="p-4 border border-border-pri mt-4">
                            <TabPanel value="tab1">탭1 콘텐츠</TabPanel>
                            <TabPanel value="tab2">탭2 콘텐츠</TabPanel>
                            <TabPanel value="tab3">탭3 콘텐츠</TabPanel>
                            <TabPanel value="tab4">탭4 콘텐츠</TabPanel>
                        </div>
                    </TabContent>
                </Tab>
            </section>
            <section>
                <h2 className="mb-2 font-bold">Tab - outline</h2>
                <Tab variant="outline" defaultValue="tab1">
                    <TabList>
                        <TabButton value="tab1">개인 프로젝트</TabButton>
                        <TabButton value="tab2">팀 프로젝트</TabButton>
                        <TabButton value="tab3">프로 프로젝트</TabButton>
                        <TabButton value="tab4">아마추어 프로젝트</TabButton>
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
            </section>
        </div>
    );
}
