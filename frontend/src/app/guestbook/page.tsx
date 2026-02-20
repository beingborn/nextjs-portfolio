'use client';

import { PageTitle } from '@/components/ui';
import API from '@/constants/api';
import useDataApi from '@/hooks/useDataApi';

interface Guestbook {
    id: number;
    title: string;
    author: string;
    text: string;
    color: string;
}

export default function GuestBook() {
    // 제네릭 훅이기 때문에 data의 타입을 유추할 수 있도록 제네릭을 넘긴다
    const { data, error, loading } = useDataApi<Guestbook[]>(API.GUESTBOOK);

    if (error) return <h1>에러 발생</h1>;
    if (loading) return <h1>로딩중</h1>;

    return (
        <>
            <PageTitle title="방명록" />
            {data?.map((d) => (
                <div key={d.id}>
                    <p>{d.id}</p>
                    <p>{d.title}</p>
                    <p>{d.author}</p>
                    <p>{d.text}</p>
                    <p>{d.color}</p>
                </div>
            ))}
        </>
    );
}
