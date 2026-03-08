import { CommonModal } from '@/components/ui';
import Image from 'next/image';
import { ProjectEntity } from 'types';

function SubTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="font-bold mb-4 text-lg">{children}</h3>;
}

interface ProjectDetailProps {
    selectedProject: ProjectEntity;
    onClose: () => void;
}

export default function ProjectDetailModal({ selectedProject, onClose }: ProjectDetailProps) {
    return (
        <CommonModal isOpen={true} title={selectedProject.title} onClose={onClose}>
            <div className="flex flex-col gap-8">
                <div>
                    <SubTitle>프로젝트 설명</SubTitle>
                    <p className="text-text-sec">{selectedProject.description}</p>
                </div>
                <div>
                    <SubTitle>기술스택</SubTitle>
                    <div className="flex gap-2 flex-wrap">
                        {selectedProject.skills.map((skill) => (
                            <Image
                                key={skill}
                                src={`/icon/ico_${skill}.svg`}
                                width={24}
                                height={24}
                                alt={skill}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <SubTitle>프로젝트 스펙</SubTitle>
                    <div className="flex gap-8">
                        <div className="flex flex-col gap-1">
                            <strong className="block">참여인원</strong>
                            <p className="text-text-sec">{selectedProject.project_members}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <strong className="block">기간</strong>
                            <p className="text-text-sec">
                                {selectedProject.start_date} ~ {selectedProject.end_date}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <strong className="block">링크</strong>
                            <p className="w-full">
                                <a
                                    className="underline text-secondary-500 text-text-sec"
                                    href={selectedProject.link}
                                >
                                    {selectedProject.link}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-50">
                    <img
                        className="w-full h-full"
                        style={{ objectFit: 'cover' }}
                        src={'https://placehold.co/600x400'}
                        alt={selectedProject.description}
                    />
                </div>
            </div>
        </CommonModal>
    );
}
