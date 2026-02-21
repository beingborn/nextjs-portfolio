'use client';

import { Button, CustomInput, CustomTextArea, Loading, PageTitle } from '@/components/ui';
import { InputState } from '@/components/ui/CustomInput';
import API from '@/constants/api';
import useFetch from '@/hooks/useFetch';
import { cn } from '@/utils/style';
import { useState } from 'react';

interface Guestbook {
    id: number;
    title: string;
    author: string;
    text: string;
    color: string;
}

/* 
    Interface는 속성 확장 + Omit 등을 이용해 기존 타입을 별칭할 경우 type이 더 적합
*/
type GuestbookForm = Omit<Guestbook, 'id'>;

const POSTITCOLORS = ['#d1e8f2', '#fdcc84', '#feebda', '#fee6e6', '#e7f1f2'];

/* 
    1. 게스트북 데이터 페칭 
    2. 게스트북 데이터 업데이트 
        - 서브밋
        - 초기값 설정 필요 
        - Input 값 Handle 함수 필요
        - 값 포함안될 경우 error 객체 포함하기

        에러 상태? 
        
        타이틀 : {
            state: '에러',
            message: '공백입니다'
        }
        
*/

// 개별 필드 구조
// State와 Message는 Variants Props에 따라 string | undefined로 추론되기 때문에 타입을 좁혀주어야한다 > CustomInput에서 추가로 가져옴
interface FieldState {
    state: InputState;
    message: string;
}

// 에러 필드 구조
interface ErrorState {
    author: FieldState;
    title: FieldState;
    text: FieldState;
}

export default function GuestBook() {
    // 제네릭 훅이기 때문에 data의 타입을 유추할 수 있도록 제네릭을 넘긴다
    const {
        data: guestbookList,
        error: guestbookListError,
        loading,
    } = useFetch<Guestbook[]>(API.GUESTBOOK);

    const [form, setForm] = useState<GuestbookForm>({
        title: '',
        author: '',
        text: '',
        color: POSTITCOLORS[0],
    });

    const [error, setError] = useState<ErrorState>({
        title: {
            state: 'default',
            message: '',
        },
        author: {
            state: 'default',
            message: '',
        },
        text: {
            state: 'default',
            message: '',
        },
    });

    const handleFormInput = (name: string, value: string) => {
        setForm((preForm) => ({
            ...preForm,
            [name]: value,
        }));

        // 입력시 초기화
        setError((prev) => ({
            ...prev,
            [name]: { state: 'default', message: '' },
        }));
    };

    const handleFormError = (name: keyof ErrorState, state: InputState, message: string) => {
        /* 객체 직접 변경 X => 복사를 통한 교체 */

        setError((prev) => ({
            ...prev, // 1. 기존의 모든 필드(title, author, text)를 그대로 복사
            [name]: {
                // 2. 그중에서 name(예: 'author')에 해당하는 필드만 선택
                state, // 3. 새로운 상태와 메시지로 덮어쓰기
                message,
            },
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.title === '') {
            console.log('공백');
            console.log(error.title.state);

            handleFormError('title', 'error', '제목 공백입니다');

            return;
        }

        if (form.author === '') {
            handleFormError('author', 'error', '작성자 공백입니다');

            return;
        }

        if (form.text === '') {
            handleFormError('text', 'error', '내용 공백입니다');

            return;
        }

        const newPost = {
            id: 1,
            title: form.title,
            author: form.author,
            text: form.text,
            color: form.color,
        };

        console.log(newPost);

        alert('서밋 성공');

        setForm({
            title: '',
            author: '',
            text: '',
            color: POSTITCOLORS[0],
        });
    };

    if (guestbookListError) return <h1>에러가 발생했습니다</h1>;
    if (loading) return <Loading />;

    return (
        <>
            <PageTitle title="방명록" />
            <p className="mb-6">방문해주셔서 감사합니다 자유로운 피드백 부탁드립니다</p>
            <section className="flex gap-8 items-start justify-between">
                <div className="shrink-0 w-70 p-4 mb-6" style={{ backgroundColor: form.color }}>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                {POSTITCOLORS.map((color) => (
                                    <button
                                        type="button"
                                        className={cn(
                                            'w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform',
                                            {
                                                'w-8 h-8 border-2': form.color === color,
                                            },
                                        )}
                                        key={color}
                                        value={color}
                                        onClick={() => handleFormInput('color', color)}
                                        style={{ backgroundColor: color }}
                                    ></button>
                                ))}
                            </div>
                            <CustomInput
                                value={form.author}
                                maxLength={20}
                                state={error.author.state}
                                message={error.author.message}
                                onChange={(e) => handleFormInput('author', e.target.value)}
                                placeholder="작성자명을 입력하세요"
                            >
                                <p className="absolute right-2 top-5 -translate-y-1/2">
                                    <span>{form.author.length}</span>/<span>20</span>
                                </p>
                            </CustomInput>
                            <CustomInput
                                value={form.title}
                                state={error.title.state}
                                message={error.title.message}
                                maxLength={20}
                                onChange={(e) => handleFormInput('title', e.target.value)}
                                placeholder="제목을 입력하세요"
                            >
                                <p className="absolute right-2 top-5 -translate-y-1/2">
                                    <span>{form.title.length}</span>/<span>20</span>
                                </p>
                            </CustomInput>
                            <CustomTextArea
                                placeholder="내용을 입력하세요"
                                className="h-50"
                                state={error.text.state}
                                message={error.text.message}
                                value={form.text}
                                onChange={(e) => handleFormInput('text', e.target.value)}
                                maxLength={100}
                            >
                                <p className="absolute right-2 bottom-2">
                                    <span>{form.text.length}</span>/<span>100</span>
                                </p>
                            </CustomTextArea>

                            <Button type="submit">완료</Button>
                        </div>
                    </form>
                </div>
                <ul className="grid grid-cols-4 gap-4">
                    {guestbookList?.map((guest) => (
                        <li
                            className="shadow-md p-4 aspect-video"
                            style={{ backgroundColor: guest.color }}
                            key={guest.id}
                        >
                            <p className="text-text-sub">{guest.author}</p>
                            <strong className="text-lg">{guest.title}</strong>
                            <p>{guest.text}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
