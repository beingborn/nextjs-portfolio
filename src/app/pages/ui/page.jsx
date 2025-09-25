'use client';

import { PageTitle, PageSubTitle } from '@/app/components/common';

/*
    TODO : 
    - 검색 구현 : 타이틀 기준으로 구현
    - 필터 SelectBox 구현
    - 디자인 구현 : 

    - 필터 종류 : 

    레이아웃, 
*/

const COMPONENTS = [
    {
        title: '아코디언 | accordion',
        href: '/pages/ui/accordion',
        description: '대화형 콘텐츠에 특화되어 있습니다.',
        type: 'layout',
    },
    {
        title: '체크박스 | checkbox',
        href: '/pages/ui/checkbox',
        description: '동의 등에 사용됩니다.',
        type: 'layout',
    },
    {
        title: '드래그앤드롭 | dragdrop',
        href: '/pages/ui/dragdrop',
        description: '요소 리스트들의 순서를 조정합니다.',
        type: 'layout',
    },
    {
        title: '에디터 | editor',
        href: '/pages/ui/editor',
        description: 'html 코드를 만듭니다.',
        type: 'layout',
    },
    {
        title: '아이콘버튼 | iconbutton',
        href: '/pages/ui/iconbutton',
        description: '아이콘과 함께하는 버튼입니다.',
        type: 'layout',
    },
    {
        title: '모달 | modal',
        href: '/pages/ui/modal',
        description: '모달입니다.',
        type: 'layout',
    },
    {
        title: '라디오 | radio',
        href: '/pages/ui/radio',
        description: '라디오입니다.',
        type: 'layout',
    },
    {
        title: '검색 | search',
        href: '/pages/ui/search',
        description: '검색을 구현합니다.',
        type: 'layout',
    },
    {
        title: '탭 | tab',
        href: '/pages/ui/tab',
        description: '탭을 구현합니다.',
        type: 'layout',
    },
];

export default function UIpage() {
    return (
        <>
            <PageTitle title="UI 컴포넌트 테스트" />
            <PageSubTitle title="컴포넌트 기능을 테스트해볼 수 있습니다. props 명세를 확인하세요." />
            <div className="flex justify-between items-center">
                <input type="text" placeholder="검색어를 입력하세요" />
                <select>
                    <option value="">레이아웃</option>
                    <option value="">시스템</option>
                    <option value="">패턴</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {COMPONENTS.map((component) => (
                    <div key={component.title} id="card">
                        <a href={component.href || '#'}>
                            <div id="card-thumb">
                                <img src="https://placehold.co/400" alt="플레이스 홀더이미지" />
                            </div>
                            <div id="card-content">
                                <h3>{component.title}</h3>
                                <p>{component.description}</p>
                                <span>{component.type}</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
