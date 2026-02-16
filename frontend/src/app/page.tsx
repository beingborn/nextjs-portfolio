'use client';

import { Accordions, Tabs } from '@/components/ui';

const Resume = '/example.txt';

export default function Home() {
    return (
        <>
            <Tabs variant="contained" defaultActiveTab="aboutMe">
                <div className="flex items-center gap-2">
                    <Tabs.Button value="aboutMe">AboutME</Tabs.Button>
                    <Tabs.Button value="skillExperience">Skill & Experience</Tabs.Button>
                    <Tabs.Button value="contact">Contact</Tabs.Button>
                </div>
                <Tabs.Panel className="flex h-full" value="aboutMe">
                    <div className="flex justify-between w-full mt-30">
                        <div className="flex items-start flex-col gap-4">
                            <h3 className="text-4xl leading-normal">
                                <span className="font-bold text-secondary-500">
                                    &quot;새로움을 즐기는&quot;
                                </span>
                                <br />
                                프론트엔드 개발자 이민혁입니다.
                            </h3>
                            <p className="text-text-sub">
                                퍼블리싱경험을 바탕으로 사용성을 가장 우선시하는 개발자입니다
                            </p>
                            <a
                                className="inline-flex px-4 py-2 bg-secondary-500 text-white rounded-sm"
                                href={Resume}
                                download
                            >
                                이력서 다운로드
                            </a>
                        </div>
                        {/* Accordion Multi / Single */}
                        <Accordions type="multi" defaultActiveAccordion="a">
                            <Accordions.Item>
                                <Accordions.Header value="a">Q. 질문합니다1</Accordions.Header>
                                <Accordions.Body value="a">A. 답변합니다1</Accordions.Body>
                            </Accordions.Item>
                        </Accordions>
                    </div>
                </Tabs.Panel>
                <Tabs.Panel className="flex items-center h-full" value="skillExperience">
                    스킬
                </Tabs.Panel>
                <Tabs.Panel className="flex items-center h-full" value="contact">
                    콘택트
                </Tabs.Panel>
            </Tabs>
        </>
    );
}
