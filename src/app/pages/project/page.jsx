'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { CommonModal, PageTitle } from '../../components/common';

const PROJECT = [
    {
        id: 1,
        title: 'Supabase + Vue3 구인구직 프로젝트',
        description: '데이터베이스 설계 경험을 위한 개인 프로젝트',
        github_link: 'https://github.com/beingborn/jobOpeningVue/tree/main/test-project',
        skills: 'vue,supabase,sass',
        type: 'sideproject',
    },
    {
        id: 2,
        title: 'Next.javascript 기반 관리자 대시보드',
        description: '차트 시각화와 사용자 권한 관리 기능을 포함한 관리자용 대시보드 개발',
        github_link: 'https://github.com/example/admin-dashboard',
        skills: 'firebase,vue,supabase,sass,tailwind',
        type: 'sideproject',
    },
    {
        id: 3,
        title: 'React Native To-do 앱',
        description: '모바일 환경에서 동작하는 간단한 To-do 앱, 오프라인 저장 기능 포함',
        github_link: 'https://github.com/example/todo-mobile',
        skills: 'python,vue,supabase,sass,tailwind',
        type: 'sideproject',
    },
    {
        id: 4,
        title: 'Markdown 기반 블로그 플랫폼',
        description: '마크다운으로 글 작성 및 다크 모드 지원 기능을 구현한 블로그 프로젝트',
        github_link: 'https://github.com/example/markdown-blog',
        skills: 'supabase,html,css,javascript',
        type: 'workproject',
    },
    {
        id: 5,
        title: 'Socket.io 채팅 애플리케이션',
        description: '실시간 양방향 통신을 활용한 웹 기반 채팅 서비스',
        github_link: 'https://github.com/example/realtime-chat',
        skills: 'typescript,supabase,sass,tailwind',
        type: 'workproject',
    },
    {
        id: 6,
        title: '전자상거래 프론트엔드',
        description: '상품 목록, 장바구니, 결제 UI까지 구현한 전자상거래 웹 프론트엔드',
        github_link: 'https://github.com/example/ecommerce-front',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'workproject',
    },
    {
        id: 7,
        title: 'OpenWeather API 날씨 앱',
        description: '외부 API를 활용해 날씨 데이터를 시각화하고, 위치 기반 검색 기능 추가',
        github_link: 'https://github.com/example/weather-app',
        skills: 'html,css,javascript,tailwind,supabase,django',
        type: 'workproject',
    },
    {
        id: 8,
        title: 'Kanban 보드 프로젝트',
        description: 'Drag & Drop 기능으로 작업 관리가 가능한 Trello 클론 프로젝트',
        github_link: 'https://github.com/example/kanban-board',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'workproject',
    },
    {
        id: 9,
        title: '영화 검색 웹앱',
        description: 'OMDb API 연동으로 영화 검색 및 즐겨찾기 기능 구현',
        github_link: 'https://github.com/example/movie-search',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'workproject',
    },
    {
        id: 10,
        title: '포트폴리오 웹사이트',
        description: '개인 소개와 프로젝트 리스트를 정리한 반응형 포트폴리오 사이트',
        github_link: 'https://github.com/example/portfolio-site',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'sideproject',
    },
];

const PROJECT_DETAIL = [
    {
        id: 1,
        title: 'Supabase + Vue3 구인구직 프로젝트',
        description: '데이터베이스 설계 경험을 위한 개인 프로젝트였습니다.',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/beingborn/jobOpeningVue/tree/main/test-project',
        skills: 'vue,supabase,sass',
        type: 'sideproject',
    },
    {
        id: 2,
        title: 'Next.javascript 기반 관리자 대시보드',
        description: '차트 시각화와 사용자 권한 관리 기능을 포함한 관리자용 대시보드 개발',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/admin-dashboard',
        skills: 'firebase,vue,supabase,sass,tailwind',
        type: 'sideproject',
    },
    {
        id: 3,
        title: 'React Native To-do 앱',
        description: '모바일 환경에서 동작하는 간단한 To-do 앱, 오프라인 저장 기능 포함',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/todo-mobile',
        skills: 'python,vue,supabase,sass,tailwind',
        type: 'sideproject',
    },
    {
        id: 4,
        title: 'Markdown 기반 블로그 플랫폼',
        description: '마크다운으로 글 작성 및 다크 모드 지원 기능을 구현한 블로그 프로젝트',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/markdown-blog',
        skills: 'supabase,html,css,javascript',
        type: 'workproject',
    },
    {
        id: 5,
        title: 'Socket.io 채팅 애플리케이션',
        description: '실시간 양방향 통신을 활용한 웹 기반 채팅 서비스',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/realtime-chat',
        skills: 'typescript,supabase,sass,tailwind',
        type: 'workproject',
    },
    {
        id: 6,
        title: '전자상거래 프론트엔드',
        description: '상품 목록, 장바구니, 결제 UI까지 구현한 전자상거래 웹 프론트엔드',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/ecommerce-front',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'workproject',
    },
    {
        id: 7,
        title: 'OpenWeather API 날씨 앱',
        description: '외부 API를 활용해 날씨 데이터를 시각화하고, 위치 기반 검색 기능 추가',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/weather-app',
        skills: 'html,css,javascript,tailwind,supabase,django',
        type: 'workproject',
    },
    {
        id: 8,
        title: 'Kanban 보드 프로젝트',
        description: 'Drag & Drop 기능으로 작업 관리가 가능한 Trello 클론 프로젝트',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/kanban-board',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'workproject',
    },
    {
        id: 9,
        title: '영화 검색 웹앱',
        description: 'OMDb API 연동으로 영화 검색 및 즐겨찾기 기능 구현',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/movie-search',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'workproject',
    },
    {
        id: 10,
        title: '포트폴리오 웹사이트',
        description: '개인 소개와 프로젝트 리스트를 정리한 반응형 포트폴리오 사이트',
        project_duration: '2025.09.25~2025.09.26',
        project_members: 3,
        github_link: 'https://github.com/example/portfolio-site',
        skills: 'vue,supabase,sass,tailwind,django',
        type: 'sideproject',
    },
];

export default function ProjectPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectId, setProjectID] = useState(null);
    const selectedProject = PROJECT_DETAIL.find((project) => project.id === projectId);

    const showModal = (id) => {
        setIsModalOpen(true);
        setProjectID(id);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <PageTitle title="프로젝트" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-8">
                {PROJECT.map((project, idx) => (
                    <button
                        onClick={() => showModal(project.id)}
                        className="flex flex-col items-start text-left border border-border-pri p-4 rounded-xl relative"
                        key={idx}
                    >
                        <h3 className="text-xl font-bold" key={idx}>
                            {project.title}
                        </h3>
                        <p className="text-text-sec mt-4 mb-4">{project.description}</p>
                        <ul className="flex items-center gap-2 mt-auto">
                            {project.skills.split(',').map((skill) => (
                                <li key={skill}>
                                    <img
                                        src={`/icon/ico_${skill}.png`}
                                        width="32"
                                        height="32"
                                        alt={skill}
                                    />
                                </li>
                            ))}
                        </ul>
                        <span
                            className={cn(
                                'min-w-[52px] inline-flex justify-center items-center rounded-xs text-xs p-1 absolute top-4 right-4 text-white bg-pink-300',
                                project.type === 'sideproject' && 'bg-blue-300',
                            )}
                        >
                            {project.type === 'sideproject' ? 'SIDE' : 'WORK'}
                        </span>
                    </button>
                ))}
            </div>
            {selectedProject && (
                <CommonModal title={selectedProject.title} isOpen={isModalOpen} onClose={hideModal}>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-bold mb-4">프로젝트 설명</h3>
                            <p className="text-text-sec">{selectedProject.description}</p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">기술스택</h3>
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
                            <h3 className="font-bold mb-4">프로젝트 스펙</h3>
                            <div className="flex gap-8">
                                <div className="flex flex-col gap-1">
                                    <strong className="block">참여인원</strong>
                                    <p className="text-text-sec">
                                        {selectedProject.project_members}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <strong className="block">기간</strong>
                                    <p className="text-text-sec">
                                        {selectedProject.project_duration}
                                    </p>
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
                    </div>
                </CommonModal>
            )}
        </div>
    );
}
