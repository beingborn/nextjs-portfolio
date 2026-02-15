'use client';

import { Card, Tabs } from '@/components/ui';
import { GuideCardTitle } from '@/features/ui/components';

export default function TabTest() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <Card.Body>
                    <GuideCardTitle>Contained</GuideCardTitle>
                    <Tabs variant="contained" defaultActiveTab="2">
                        <div className="w-full gap-2 flex items-center overflow-x-auto">
                            <Tabs.Button value="1">Contained 1</Tabs.Button>
                            <Tabs.Button value="2">Contained 2</Tabs.Button>
                            <Tabs.Button value="3">Contained 3</Tabs.Button>
                        </div>
                        <div className="bg-white p-4 mt-4">
                            <Tabs.Panel value="1">Contained Cont 1</Tabs.Panel>
                            <Tabs.Panel value="2">Contained Cont 2</Tabs.Panel>
                            <Tabs.Panel value="3">Contained Cont 3</Tabs.Panel>
                        </div>
                    </Tabs>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>Line</GuideCardTitle>
                    <Tabs variant="line" defaultActiveTab="a">
                        <div className="w-full flex items-center overflow-x-auto">
                            <Tabs.Button value="a">Line 1</Tabs.Button>
                            <Tabs.Button value="b">Line 2</Tabs.Button>
                            <Tabs.Button value="c">Line 3</Tabs.Button>
                        </div>
                        <div className="bg-white p-4 mt-4">
                            <Tabs.Panel value="a">Line Cont 1</Tabs.Panel>
                            <Tabs.Panel value="b">Line Cont 2</Tabs.Panel>
                            <Tabs.Panel value="c">Line Cont 3</Tabs.Panel>
                        </div>
                    </Tabs>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>Text</GuideCardTitle>
                    <Tabs variant="text" defaultActiveTab="q">
                        <div className="flex items-center gap-2">
                            <Tabs.Button value="q">Text 1</Tabs.Button>
                            <Tabs.Button value="w">Text 2</Tabs.Button>
                            <Tabs.Button value="e">Text 3</Tabs.Button>
                        </div>
                        <div className="bg-white p-4 mt-4">
                            <Tabs.Panel value="q">Text Cont 1</Tabs.Panel>
                            <Tabs.Panel value="w">Text Cont 2</Tabs.Panel>
                            <Tabs.Panel value="e">Text Cont 3</Tabs.Panel>
                        </div>
                    </Tabs>
                </Card.Body>
            </Card>
        </div>
    );
}
