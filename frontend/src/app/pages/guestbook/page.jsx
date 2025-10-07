'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import useDataApi from '../../../hooks/useDataApi';
import { Button, PageTitle } from '../../components/common';

const USERMAXLENGTH = 10;
const COMMENTMAXLENGTH = 100;
const POSTITCOLORS = ['#d1e8f2', '#fdcc84', '#feebda', '#fee6e6', '#e7f1f2'];

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
            {guestbook?.map((guest) => (
                <li
                    className="shadow-md p-4 aspect-video"
                    style={{ backgroundColor: guest.color }}
                    key={guest.id}
                >
                    <strong>{guest.title}</strong>
                    <p>{guest.author}</p>
                    <p>{guest.text}</p>
                </li>
            ))}
        </ul>
    );
}

export default function GuestbookPage() {
    const { data, loading, error } = useDataApi('/api/guestbook');
    const [guestbook, setGuestBook] = useState([]);
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (data) {
            setGuestBook(data);
        }
    }, [data]);

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
                        {error && <p>데이터를 불러오지 못했습니다</p>}
                        {loading && <p>데이터를 로딩중입니다</p>}
                        <GuestBookList guestbook={guestbook} />
                    </div>
                </div>
            </div>
        </>
    );
}
