export interface SkillItem {
    name: string;
    description: string[];
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export const SKILLS: SkillCategory[] = [
    {
        category: 'Core',
        items: [
            {
                name: 'HTML',
                description: [
                    '웹 표준을 준수한 마크업 작성',
                    '시맨틱 태그 기반 구조 설계',
                    '접근성 실무 작업 경험',
                    'WAI-ARIA 속성 활용 가능',
                ],
            },
            {
                name: 'CSS',
                description: [
                    'Flexbox 및 Grid 레이아웃 구현',
                    '반응형 웹 디자인 경험',
                    '애니메이션 및 트랜지션 구현',
                    '유지보수 가능한 스타일 구조 설계',
                ],
            },
            {
                name: 'JavaScript',
                description: [
                    'ES6+ 문법 활용',
                    '비동기 처리 (Promise, async/await)',
                    'DOM 조작 및 이벤트 핸들링',
                    'API 통신 및 데이터 처리',
                ],
            },
            {
                name: 'Python',
                description: ['테스트 텍스트'],
            },
        ],
    },

    {
        category: 'Framework',
        items: [
            {
                name: 'React',
                description: [
                    'Hooks 기반 개발',
                    '상태 관리 (Context, Redux)',
                    '컴포넌트 재사용 구조 설계',
                    'Next.js 프로젝트 경험',
                ],
            },
            {
                name: 'Nextjs',
                description: ['테스트 텍스트'],
            },
            {
                name: 'Vue',
                description: [
                    'Composition API 활용',
                    'Pinia 상태 관리',
                    '컴포넌트 기반 설계',
                    'Vue Router 설정 경험',
                ],
            },
        ],
    },

    {
        category: 'Styling',
        items: [
            {
                name: 'SASS',
                description: [
                    '변수 및 믹스인 활용',
                    '모듈화된 스타일 구조',
                    '중첩 및 확장 기능 활용',
                    '유지보수 고려한 스타일링',
                ],
            },
            {
                name: 'Tailwind',
                description: ['테스트 텍스트'],
            },
            {
                name: 'Bootstrap',
                description: ['테스트 텍스트'],
            },
        ],
    },

    {
        category: 'Backend',
        items: [
            {
                name: 'Django',
                description: ['REST API 개발', 'ORM 활용', 'Admin 커스터마이징', 'JWT 인증 구현'],
            },
            {
                name: 'Supabase',
                description: [
                    'Auth 설정 및 관리',
                    'PostgreSQL 기반 DB 설계',
                    'RLS 정책 설정 경험',
                    '실시간 기능 활용',
                ],
            },
            {
                name: 'Firebase',
                description: ['테스트 텍스트'],
            },
        ],
    },

    {
        category: 'DevOps',
        items: [
            {
                name: 'AWS',
                description: [
                    'EC2 배포 경험',
                    'S3 정적 파일 호스팅',
                    '기본적인 IAM 설정',
                    'CloudFront 활용 경험',
                ],
            },
        ],
    },

    {
        category: 'Tools',
        items: [
            {
                name: 'GitHub',
                description: ['테스트 텍스트 1'],
            },
            {
                name: 'Postman',
                description: [
                    'API 테스트 및 문서화',
                    '환경 변수 설정',
                    '컬렉션 관리',
                    '자동화 테스트 작성',
                ],
            },
        ],
    },
    {
        category: 'Library',
        items: [
            {
                name: 'jQuery',
                description: ['테스트 텍스트'],
            },
        ],
    },
];
