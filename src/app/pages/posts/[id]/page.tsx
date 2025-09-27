'use client';

import { TableCell, TableHead } from '@/app/components/common/Table.jsx';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostsDetail() {
    const pathname = usePathname();
    const pageId = pathname.split('/').at(-1);

    type Post = {
        userId: number;
        id: number;
        title: string;
        body: string;
    };

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Post[]>([]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            const pageData = response.data.find((item: Post) => String(item.id) === pageId);

            setData(pageData);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading || !data) {
        return <div>로딩 중..</div>;
    }

    return (
        <table>
            <caption>Post 상세페이지</caption>
            <colgroup>
                <col className="w-[250px]" />
                <col />
            </colgroup>
            <tbody>
                <tr>
                    <TableHead>글 번호</TableHead>
                    <TableCell>{data.id}</TableCell>
                </tr>
                <tr>
                    <TableHead>제목</TableHead>
                    <TableCell>{data.title}</TableCell>
                </tr>
                <tr>
                    <TableHead>내용</TableHead>
                    <TableCell>{data.body}</TableCell>
                </tr>
            </tbody>
        </table>
    );
}
