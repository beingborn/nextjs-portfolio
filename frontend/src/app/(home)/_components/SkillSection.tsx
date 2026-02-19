import { Card, Popover } from '@/components/ui';
import { SKILLS } from '@/data/skills';
import Image from 'next/image';

export default function SkillSection() {
    return (
        <section>
            <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-3xl font-bold">Skill</h2>
                <p className="text-danger-500">
                    * 스킬 아이콘을 클릭하면 상세 내용을 확인할 수 있습니다.
                </p>
            </div>
            <Card>
                <Card.Body>
                    <div className="grid grid-cols-3 gap-8">
                        {SKILLS.map((skill, skillIndex) => (
                            <div key={skillIndex}>
                                <h2 className="text-xl mb-2">{skill.category}</h2>

                                <div className="flex items-center gap-2">
                                    {skill.items.map((item, colIndex) => (
                                        <Popover key={colIndex}>
                                            <Popover.Trigger>
                                                <span className="sr-only">
                                                    {item.name} 상세보기
                                                </span>
                                                <Image
                                                    className="hover:scale-105 transition-all ease-in duration-300"
                                                    src={`/icon/ico_${item.name.toLowerCase()}.svg`}
                                                    alt={item.name}
                                                    width="40"
                                                    height="40"
                                                />
                                            </Popover.Trigger>
                                            <Popover.Content
                                                title={item.name.toUpperCase()}
                                                className="min-w-100 p-4 rounded-lg"
                                            >
                                                <ul className="text-text-sub">
                                                    {item.description.map((d) => (
                                                        <li key={d}>{d}</li>
                                                    ))}
                                                </ul>
                                            </Popover.Content>
                                        </Popover>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
}
