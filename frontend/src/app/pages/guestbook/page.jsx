'use client';

import { cn } from '@/lib/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useDataApi from '../../../hooks/useDataApi';
import { Button, PageTitle } from '../../components/common';

const TITLEMAXLENGTH = 20;
const AUTHORMAXLENGTH = 10;
const TEXTMAXLENGTH = 100;
const POSTITCOLORS = ['#d1e8f2', '#fdcc84', '#feebda', '#fee6e6', '#e7f1f2'];

const initialForm = {
    title: '',
    author: '',
    text: '',
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
                            placeholder="제목"
                            value={form.title}
                            onChange={(e) => onInput('title', e)}
                            maxLength={TITLEMAXLENGTH}
                        />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2">
                            {form.title.length} / {TITLEMAXLENGTH}
                        </span>
                    </div>
                    <div className="relative">
                        <input
                            className="w-full"
                            type="text"
                            placeholder="이름"
                            value={form.author}
                            onChange={(e) => onInput('author', e)}
                            maxLength={AUTHORMAXLENGTH}
                        />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2">
                            {form.author.length} / {AUTHORMAXLENGTH}
                        </span>
                    </div>
                    <div className="relative">
                        <textarea
                            className="w-full h-[240px] resize-none"
                            placeholder="글 내용"
                            value={form.text}
                            onChange={(e) => onInput('text', e)}
                            maxLength={TEXTMAXLENGTH}
                        />
                        <span className="absolute right-2 bottom-2">
                            {form.text.length} / {TEXTMAXLENGTH}
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
    const { data, loading, error, fetchData } = useDataApi('/api/guestbook');
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

    async function postData() {
        const newGuest = {
            title: form.title,
            author: form.author,
            text: form.text,
            color: form.color,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/guestbook', newGuest);
            console.log(response);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Data Post
        postData();

        alert('작성이 완료되었습니다!');

        // Data 재연결
        fetchData();

        // Form 초기화
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
