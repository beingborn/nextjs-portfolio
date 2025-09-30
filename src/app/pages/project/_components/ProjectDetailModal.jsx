'use client';

import { CommonModal } from '../../../components/common';

function SubTitle({ children }) {
    return <h3 className="font-bold mb-4 text-lg">{children}</h3>;
}

export default function ProjectDetailModal({ selectedProject, isOpen, onClose }) {
    return (
        <CommonModal title={selectedProject.title} isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-8">
                <div>
                    <SubTitle>프로젝트 설명</SubTitle>
                    <p className="text-text-sec">{selectedProject.description}</p>
                </div>
                <div>
                    <SubTitle>기술스택</SubTitle>
                    <div className="flex gap-2 flex-wrap">
                        {selectedProject.skills.split(',').map((skill) => (
                            <div key={skill}>
                                <img
                                    src={`/icon/ico_${skill}.png`}
                                    width="24"
                                    height="24"
                                    alt={skill}
                                />
                            </div>
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
                            <p className="text-text-sec">{selectedProject.project_duration}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <strong className="block">링크</strong>
                            <p className="w-full">
                                <a
                                    className="underline text-text-sec"
                                    href={selectedProject.github_link}
                                >
                                    프로젝트링크
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={selectedProject.thumbnail} alt="포트폴리오" />
                </div>
            </div>
        </CommonModal>
    );
}
