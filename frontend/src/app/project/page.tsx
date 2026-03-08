'use client';

import { Loading, PageTitle, Tabs } from '@/components/ui';
import API from '@/constants/api';
import ProjectDetailModal from '@/features/project/components/ProjectDetailModal';
import ProjectList from '@/features/project/components/ProjectList';
import useFetch from '@/hooks/useFetch';
import { useState } from 'react';
import { ProjectEntity } from 'types';

/* 
    1. 정적 데이터 연결
    2. 데이터 페칭 
        - Entity 생성 
        - Fetch Data 정의 
        - Data 확인

    3. 모달 생성 후 연결


    {
        "id": 1,
        "title": "포트폴리오 테스트1",
        "thumbnail": "/default_avatar-WfQooUcn.jpg",
        "description": "포트폴리오 테스트1 디스크립션",
        "start_date": "2026-03-03",
        "end_date": "2026-03-04",
        "project_members": 3,
        "link": "https://github.com/beingborn",
        "skills": [
            "javascript",
            "react",
            "html",
            "css"
        ],
        "type": "sideproject"
    },
*/

export default function Project() {
    const [selectedProject, setSelectedProject] = useState<ProjectEntity | null>(null);
    const {
        data: projectList,
        error: projectListError,
        loading,
    } = useFetch<ProjectEntity[]>(API.PROJECT);

    if (projectListError) return <h1>에러가 발생했습니다</h1>;
    if (loading) return <Loading />;

    const companyProjectList = projectList.filter((project) => project.type === 'workproject');
    const personalProjectList = projectList.filter((project) => project.type === 'sideproject');

    const showModal = (project: ProjectEntity) => {
        setSelectedProject(project);
    };

    const hideModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <PageTitle title="프로젝트" />
            <Tabs variant="contained" defaultActiveTab="all">
                <div className="flex items-center gap-2">
                    <Tabs.Button value="all">전체</Tabs.Button>
                    <Tabs.Button value="company">회사 프로젝트</Tabs.Button>
                    <Tabs.Button value="personal">개인 프로젝트</Tabs.Button>
                </div>
                <Tabs.Panel value="all">
                    <ProjectList onOpenModal={showModal} projectList={projectList} />
                </Tabs.Panel>
                <Tabs.Panel value="company">
                    <ProjectList onOpenModal={showModal} projectList={companyProjectList} />
                </Tabs.Panel>
                <Tabs.Panel value="personal">
                    <ProjectList onOpenModal={showModal} projectList={personalProjectList} />
                </Tabs.Panel>
            </Tabs>
            {selectedProject && (
                <ProjectDetailModal
                    onClose={hideModal}
                    selectedProject={selectedProject}
                ></ProjectDetailModal>
            )}
        </>
    );
}
