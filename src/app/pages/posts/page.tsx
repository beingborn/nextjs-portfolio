'use client';

import Table from '@/app/components/common/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';

/**
 * 1. Axios Fetching
 * 2. Data Setting
 * 3. Pass Handle Paging
 */

const columns = [
    { id: 'userId', label: '유저명' },
    { id: 'id', label: '아이디' },
    { id: 'title', label: '제목', isLink: true, href: 'posts' },
    { id: 'body', label: '내용' },
];

export default function PostsList() {
    type Post = {
        userId: number;
        id: number;
        title: string;
        body: string;
    };

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [itemCount, setItemCount] = useState(10);
    const offset = (page - 1) * itemCount;
    const sliceData = data.slice(offset, offset + itemCount);

    const handlePageChange = (page: any) => {
        setPage(page);
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>로딩 중..</div>;
    }

    return (
        <div>
            <select value={itemCount} onChange={(e) => setItemCount(Number(e.target.value))}>
                <option value="5">5건씩 보기</option>
                <option value="10">10건씩 보기</option>
                <option value="15">15건씩 보기</option>
                <option value="20">20건씩 보기</option>
            </select>

            <Table label="test" columns={columns} data={sliceData} />

            <Pagination
                activePage={page}
                itemsCountPerPage={itemCount}
                totalItemsCount={data.length - 1}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </div>
    );
}
