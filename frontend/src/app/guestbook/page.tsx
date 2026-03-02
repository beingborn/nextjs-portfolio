'use client';

import { createGuestbookEntry } from '@/api/post';
import { Loading, PageTitle } from '@/components/ui';
import { InputState } from '@/components/ui/CustomInput';
import API from '@/constants/api';
import GuestbookForm from '@/features/guestbook/GuestbookForm';
import GuestbookList from '@/features/guestbook/GuestbookList';
import useFetch from '@/hooks/useFetch';
import { useState } from 'react';
import { GuestbookEntity } from 'types';

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
        fetchData: refetchGuestbookList,
    } = useFetch<GuestbookEntity[]>(API.GUESTBOOK);

    const POSTITCOLORS = ['#d1e8f2', '#fdcc84', '#feebda', '#fee6e6', '#e7f1f2'];

    const hasReachedGuestbookLimit = guestbookList.length > 40;

    const [form, setForm] = useState({
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // 에러 핸들링
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

        // createGuestbook 자체는 Promise<response>를 반환하기 때문에 호출하는 쪽에서도 await을 써주어야함
        const response = await createGuestbookEntry(newPost);
        console.log(response);

        refetchGuestbookList();

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
                <GuestbookForm
                    error={error}
                    colors={POSTITCOLORS}
                    onFieldChange={handleFormInput}
                    onSubmit={handleSubmit}
                    form={form}
                    disabled={hasReachedGuestbookLimit}
                />
                <GuestbookList guestbooklist={guestbookList} />
            </section>
        </>
    );
}
