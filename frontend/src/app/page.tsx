'use client';

import { Accordions, Tabs } from '@/components/ui';

const Resume = '/example.txt';

const QNA = [
    {
        id: 'question-1',
        question: '왜 프론트엔드 개발자인가요?',
        answer: '사용자와 직접 소통하며 작업을 할 수 있을 때 전 큰 작업의 보람을 느낍니다. 퍼블리셔로 일하며 웹 접근성 작업을 하며 실제 장애 사용자들의 편에서 OO해서 이런걸 느꼈습니다.',
    },
    {
        id: 'question-2',
        question: '장점을 말해주세요',
        answer: '전 작업을 정말 좋아하는 사람입니다. 특정 새로운 기능을 맞추는걸 좋아해요',
    },
    {
        id: 'question-3',
        question: '앞으로 어떤 사람이 되고 싶나요?',
        answer: '이런 사람이 되고 싶습니다',
    },
    {
        id: 'question-4',
        question: '포트폴리오는 왜 이렇게 만들었나요?',
        answer: '이런식으로 만들고 싶었던 이유는.. ',
    },
];

export default function Home() {
    return (
        <>
            <Tabs variant="contained" defaultActiveTab="aboutMe">
                <div className="flex items-center gap-2">
                    <Tabs.Button value="aboutMe">AboutME</Tabs.Button>
                    <Tabs.Button value="skillExperience">Skill & Experience</Tabs.Button>
                    <Tabs.Button value="contact">Contact</Tabs.Button>
                </div>
                <Tabs.Panel className="flex" value="aboutMe">
                    <div className="flex items-start gap-20 w-full mt-30">
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
                        <Accordions
                            variant="line"
                            className="w-100 border-b border-t border-border-primary-300"
                            type="multi"
                            defaultActiveAccordion="question-1"
                        >
                            {QNA.map((item, idx) => {
                                const isFirst = idx === 0;
                                const isLast = QNA.length === idx - 1;

                                return (
                                    <Accordions.Item key={item.question}>
                                        <Accordions.Header
                                            className={`${!isFirst && !isLast && 'border-t border-border-primary-300'}`}
                                            value={item.id}
                                        >
                                            <span className="text-info-500 mr-2">Q</span>
                                            {item.question}
                                        </Accordions.Header>
                                        <Accordions.Body value={item.id}>
                                            <div className="p-4">
                                                <span className="text-success-500 mr-2">A.</span>
                                                {item.answer}
                                            </div>
                                        </Accordions.Body>
                                    </Accordions.Item>
                                );
                            })}
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
