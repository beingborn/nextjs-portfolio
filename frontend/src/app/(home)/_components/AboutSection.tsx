import { Accordions } from '@/components/ui';
import { QNA } from '@/data/qna';

const RESUME = '/example.txt';

export default function AboutSection() {
    return (
        <section className="flex items-center justify-between w-full mt-30">
            <div className="flex items-start flex-col gap-4">
                <div className="h-70 w-60 bg-bg-base"></div>
                <h3 className="text-4xl leading-normal">
                    <span className="font-bold text-secondary-500">
                        &quot;새로움을 즐기는&quot;
                    </span>
                    <br />
                    프론트엔드 개발자 이민혁입니다.
                </h3>
                <div className="text-text-sub">
                    <p>퍼블리싱경험을 바탕으로 사용성을 가장 우선시하는 개발자입니다</p>
                    <p>퍼블리싱경험을 바탕으로 사용성을 가장 우선시하는 개발자입니다</p>
                    <p>퍼블리싱경험을 바탕으로 사용성을 가장 우선시하는 개발자입니다</p>
                </div>

                <a
                    className="inline-flex px-4 py-2 bg-secondary-500 text-white rounded-sm"
                    href={RESUME}
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
        </section>
    );
}
