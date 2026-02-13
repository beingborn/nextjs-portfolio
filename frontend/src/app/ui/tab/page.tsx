'use client';

import { Tabs } from '@/components/ui';

export default function TabTest() {
    return (
        <div>
            <Tabs defaultActiveTab="2">
                <Tabs.Button value="1">탭 버튼1</Tabs.Button>
                <Tabs.Button value="2">탭 버튼2</Tabs.Button>
                <Tabs.Button value="3">탭 버튼3</Tabs.Button>
                <Tabs.Panel value="1">탭 콘텐츠1</Tabs.Panel>
                <Tabs.Panel value="2">탭 콘텐츠2</Tabs.Panel>
                <Tabs.Panel value="3">탭 콘텐츠3</Tabs.Panel>
            </Tabs>
        </div>
    );
}
