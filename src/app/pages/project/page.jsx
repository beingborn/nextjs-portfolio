import { PageTitle } from '../../components/common';

const PROJECT = [
    {
        id: 1,
        title: 'Supabase + Vue3 구인구직 프로젝트',
        description: '데이터베이스 설계 경험을 위한 개인 프로젝트',
        github_link: 'https://github.com/beingborn/jobOpeningVue/tree/main/test-project',
        skills: 'vue,supabase,scss',
    },
    {
        id: 2,
        title: 'Next.js 기반 관리자 대시보드',
        description: '차트 시각화와 사용자 권한 관리 기능을 포함한 관리자용 대시보드 개발',
        github_link: 'https://github.com/example/admin-dashboard',
        skills: 'next.js,react,tailwindcss,recharts',
    },
    {
        id: 3,
        title: 'React Native To-do 앱',
        description: '모바일 환경에서 동작하는 간단한 To-do 앱, 오프라인 저장 기능 포함',
        github_link: 'https://github.com/example/todo-mobile',
        skills: 'react-native,expo,async-storage',
    },
    {
        id: 4,
        title: 'Markdown 기반 블로그 플랫폼',
        description: '마크다운으로 글 작성 및 다크 모드 지원 기능을 구현한 블로그 프로젝트',
        github_link: 'https://github.com/example/markdown-blog',
        skills: 'next.js,typescript,tailwindcss,mdx',
    },
    {
        id: 5,
        title: 'Socket.io 채팅 애플리케이션',
        description: '실시간 양방향 통신을 활용한 웹 기반 채팅 서비스',
        github_link: 'https://github.com/example/realtime-chat',
        skills: 'react,node.js,socket.io,css-modules',
    },
    {
        id: 6,
        title: '전자상거래 프론트엔드',
        description: '상품 목록, 장바구니, 결제 UI까지 구현한 전자상거래 웹 프론트엔드',
        github_link: 'https://github.com/example/ecommerce-front',
        skills: 'react,redux-toolkit,styled-components',
    },
    {
        id: 7,
        title: 'OpenWeather API 날씨 앱',
        description: '외부 API를 활용해 날씨 데이터를 시각화하고, 위치 기반 검색 기능 추가',
        github_link: 'https://github.com/example/weather-app',
        skills: 'vue,axios,tailwindcss',
    },
    {
        id: 8,
        title: 'Kanban 보드 프로젝트',
        description: 'Drag & Drop 기능으로 작업 관리가 가능한 Trello 클론 프로젝트',
        github_link: 'https://github.com/example/kanban-board',
        skills: 'react,typescript,dnd-kit,scss',
    },
    {
        id: 9,
        title: '영화 검색 웹앱',
        description: 'OMDb API 연동으로 영화 검색 및 즐겨찾기 기능 구현',
        github_link: 'https://github.com/example/movie-search',
        skills: 'next.js,react,swr,tailwindcss',
    },
    {
        id: 10,
        title: '포트폴리오 웹사이트',
        description: '개인 소개와 프로젝트 리스트를 정리한 반응형 포트폴리오 사이트',
        github_link: 'https://github.com/example/portfolio-site',
        skills: 'next.js,typescript,framer-motion,tailwindcss',
    },
];

export default function ProjectPage() {
    return (
        <div>
            <PageTitle title="프로젝트" />
            <p>피 땀흘려 만들었습니다.</p>

            <div className="grid grid-cols-3 gap-4">
                {PROJECT.map((project, idx) => (
                    <div className="border border-border-pri p-4 rounded-xl" key={idx}>
                        <p key={idx}>{project.title}</p>
                        <p>{project.description}</p>
                        <img src={`https://skillicons.dev/icons?i=${project.skills}`} />
                        {/* {project.skills.split(',').map((skill) => (
                            <ul key={skill}>
                                <li>{skill}</li>
                            </ul>
                        ))} */}
                    </div>
                ))}
            </div>
        </div>
    );
}
