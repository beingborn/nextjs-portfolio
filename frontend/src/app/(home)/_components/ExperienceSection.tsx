import Image from 'next/image';

const EXPERIENCE = [
    {
        comany: '아이티펍',
        skills: ['html', 'css', 'jquery', 'react', 'sass'],
    },
];

export default function ExperienceSection() {
    return (
        <section>
            <div className="mb-4 flex flex-col gap-2">
                <h2 className="text-3xl font-bold">Experience</h2>

                <div className="py-4 border-t border-t-border-primary-500">
                    <div className="flex flex-col gap-2">
                        <span className="text-text-sub">
                            <span className="text-secondary-500 mr-1 font-bold">*</span>
                            2024.07 ~ 현재
                        </span>
                        <strong className="text-xl">아이티펍</strong>
                        <div className="flex items-center gap-2">
                            {EXPERIENCE[0].skills.map((skill) => (
                                <Image
                                    key={skill}
                                    src={`/icon/ico_${skill}.svg`}
                                    alt={skill}
                                    width="24"
                                    height="24"
                                />
                            ))}
                        </div>
                        <details className="text-lg">
                            <summary>주요 업무 내용</summary>
                            <ul className="pl-4 list-inside list-disc text-text-sub">
                                <li>웹 접근성 뭐시기 업무 업무</li>
                                <li>퍼블리싱 업무업무</li>
                                <li>디자인시스템 업무</li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}
