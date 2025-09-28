'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button, PageTitle } from '../../components/common';

const USERMAXLENGTH = 10;
const COMMENTMAXLENGTH = 100;
const POSTITCOLORS = ['#d1e8f2', '#fdcc84', '#feebda', '#fee6e6', '#e7f1f2'];
const GUESTBOOK = [
    {
        id: 1,
        user: '소라',
        comment: 'UI가 깔끔하고 보기 좋아요.',
        color: '#d1e8f2',
    },
    {
        id: 2,
        user: '하윤',
        comment: '애니메이션 전환이 자연스러워요.',
        color: '#feebda',
    },
    {
        id: 3,
        user: '민재',
        comment: '다크 모드도 있으면 좋겠어요.',
        color: '#e7f1f2',
    },
    {
        id: 4,
        user: '유나',
        comment: '프로젝트 설명이 이해하기 쉬워요.',
        color: '#fdcc84',
    },
    {
        id: 5,
        user: '현우',
        comment: '모바일 레이아웃도 안정적이네요.',
        color: '#fee6e6',
    },
    {
        id: 6,
        user: '다은',
        comment: '코드 샘플이 인상적입니다.',
        color: '#d1e8f2',
    },
    {
        id: 7,
        user: '서준',
        comment: '접근성 고려가 돋보여요.',
        color: '#feebda',
    },
    {
        id: 8,
        user: '가을',
        comment: '로딩 속도가 빠릅니다.',
        color: '#e7f1f2',
    },
    {
        id: 9,
        user: '지호',
        comment: '포트폴리오 스토리텔링이 좋아요.',
        color: '#fdcc84',
    },
    {
        id: 10,
        user: '리나',
        comment: '이미지 최적화가 잘 되어 있어요.',
        color: '#fee6e6',
    },
    {
        id: 11,
        user: '도윤',
        comment: '타이포그래피가 안정적이에요.',
        color: '#d1e8f2',
    },
    {
        id: 12,
        user: '시온',
        comment: '색 구성 배합이 마음에 들어요.',
        color: '#feebda',
    },
    {
        id: 13,
        user: '나연',
        comment: '프로젝트별 상세 페이지가 유용해요.',
        color: '#e7f1f2',
    },
    {
        id: 14,
        user: '은호',
        comment: '검색 기능이 직관적입니다.',
        color: '#fdcc84',
    },
    {
        id: 15,
        user: '하린',
        comment: '문서화가 잘 되어 있네요.',
        color: '#fee6e6',
    },
];

const initialForm = {
    id: '',
    user: '',
    comment: '',
    color: POSTITCOLORS[0],
};

function GuestBookForm({ onSubmit, onInput, form }) {
    return (
        <div className="p-4" style={{ backgroundColor: form.color }}>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        {POSTITCOLORS.map((postitcolor) => (
                            <button
                                key={postitcolor}
                                value={postitcolor}
                                type="button"
                                onClick={(e) => onInput('color', e)}
                                className={cn(
                                    'w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform',
                                    {
                                        'w-8 h-8 border-2': form.color == postitcolor,
                                    },
                                )}
                                style={{ backgroundColor: postitcolor }}
                            ></button>
                        ))}
                    </div>
                    <div className="relative">
                        <input
                            className="w-full"
                            type="text"
                            placeholder="유저명"
                            value={form.user}
                            onChange={(e) => onInput('user', e)}
                            maxLength={USERMAXLENGTH}
                        />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2">
                            {form.user.length} / {USERMAXLENGTH}
                        </span>
                    </div>
                    <div className="relative">
                        <textarea
                            className="w-full h-[240px] resize-none"
                            placeholder="글 내용"
                            value={form.comment}
                            onChange={(e) => onInput('comment', e)}
                            maxLength={COMMENTMAXLENGTH}
                        />
                        <span className="absolute right-2 bottom-2">
                            {form.comment.length} / {COMMENTMAXLENGTH}
                        </span>
                    </div>
                    <Button type="submit">업로드</Button>
                </div>
            </form>
        </div>
    );
}

function GuestBookList({ guestbook }) {
    return (
        <ul className="grid grid-cols-3 gap-4">
            {guestbook.map((guest) => (
                <li
                    className="shadow-md p-4 aspect-video"
                    style={{ backgroundColor: guest.color }}
                    key={guest.id}
                >
                    <strong>{guest.user}</strong>
                    <p>{guest.comment}</p>
                </li>
            ))}
        </ul>
    );
}

export default function GuestbookPage() {
    const [guestbook, setGuestBook] = useState(GUESTBOOK);
    const [form, setForm] = useState(initialForm);

    function handleInput(name, event) {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: event.target.value,
        }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newGuest = {
            id: Math.random(),
            user: form.user,
            comment: form.comment,
            color: form.color,
        };

        setGuestBook((prevGuestBook) => [newGuest, ...prevGuestBook]);

        alert('작성이 완료되었습니다!');
        setForm(initialForm);
    };

    return (
        <>
            <PageTitle title="방명록" />
            <div className="p-4 bg-blue-50 rounded-2xl mb-6">
                <p>방문해주셔서 감사합니다!</p>
                <p>자유로운 피드백 부탁드립니다</p>
            </div>
            <div className="flex flex-col gap-5 max-w-[1440px]">
                <div className="flex gap-4">
                    <div className="basis-[300px] shrink-0" id="post">
                        <GuestBookForm
                            form={form}
                            onInput={handleInput}
                            onSubmit={handleFormSubmit}
                        />
                    </div>
                    <div className="grow h-[800px] overflow-y-scroll" id="post-list">
                        <GuestBookList guestbook={guestbook} />
                    </div>
                </div>
            </div>
        </>
    );
}
