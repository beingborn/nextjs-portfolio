'use client';

import { SelectBox, Table } from '@/app/components/common';
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

const limit = 20;

export default function PostsList() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [itemCount, setItemCount] = useState();
    const isAll = itemCount == '';
    const offset = (page - 1) * itemCount;
    const sliceData = isAll
        ? data.slice(offset, offset + limit)
        : data.slice(offset, offset + itemCount);

    const handlePageChange = (page) => {
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
            <div className="flex justify-between mb-4">
                <SelectBox
                    options={[
                        { value: '5건씩 보기', key: '5' },
                        { value: '10건씩 보기', key: '10' },
                        { value: '15건씩 보기', key: '15' },
                        { value: '20건씩 보기', key: '20' },
                    ]}
                    placeholder="게시물 노출 수 선택"
                    selectedValue={itemCount}
                    error={null}
                    disabled={false}
                    handleChange={setItemCount}
                />
            </div>
            <Table label="test" columns={columns} data={sliceData} />
            <Pagination
                activePage={page}
                itemsCountPerPage={itemCount == '' ? limit : itemCount}
                totalItemsCount={data.length - 1}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </div>
    );
}
