'use client';

import { CustomInput, PageTitle, SelectBox, Table } from '@/components/ui';
import { Column } from '@/components/ui/Table';
import API from '@/constants/api';
import useFetch from '@/hooks/useFetch';
import { Paperclip } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { PaginatedResponse, PostEntity } from 'types';

const pageSizeOpts = [
    { label: '10개씩 보기', value: 10 },
    { label: '20개씩 보기', value: 20 },
    { label: '30개씩 보기', value: 30 },
];

const searchCategoryOpts = [
    { label: '제목', value: 'title' },
    { label: '내용', value: 'content' },
];

export default function Board() {
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchCategory, setSearchCategory] = useState<string>('title');
    const [searchInput, setSearchInput] = useState<string>('');
    const searchParams = useSearchParams();
    const page = searchParams.get('page');

    const { data: postData, error: postsError } = useFetch<PaginatedResponse<PostEntity>>(
        API.BOARD + `?page=${page}&page_size=${pageSize}`,
    );

    const handleSearchInput = (value: string) => {
        setSearchInput(value);
    };

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(e.target.value));
    };

    const handleSearchCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchCategory(e.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const searchQuery = {
            pageSize: pageSize,
            searchCategory: searchCategory,
            searchInput: searchInput,
        };

        const JsonSearchQuery = JSON.stringify(searchQuery);

        alert(JsonSearchQuery);
    };

    const columns: Column<PostEntity>[] = [
        {
            key: 'id',
            header: 'No.',
            width: 40,
        },
        {
            key: 'title',
            header: '제목',
            width: 200,
            align: 'left',
            render: (row: PostEntity) =>
                row.files ? (
                    <a className="flex items-center gap-2" href={`../board/${row.id}`}>
                        <Paperclip size="20" /> <span>{row.title}</span>
                    </a>
                ) : (
                    <a className="block" href={`../board/${row.id}`}>
                        {row.title}
                    </a>
                ),
        },
        {
            key: 'created_at',
            header: '작성일',
            width: 80,
        },
        {
            key: 'modified_at',
            header: '수정일',
            width: 80,
        },
    ];

    return (
        <>
            <PageTitle title="게시판" />
            <form onSubmit={handleSearchSubmit}>
                <div className="flex items-center justify-between">
                    <SelectBox
                        selectedValue={pageSize}
                        onChange={handlePageSizeChange}
                        options={pageSizeOpts}
                    />
                    <div className="flex items-center gap-2">
                        <SelectBox
                            selectedValue={searchCategory}
                            onChange={handleSearchCategoryChange}
                            options={searchCategoryOpts}
                        />
                        <CustomInput
                            value={searchInput}
                            onChange={(e) => handleSearchInput(e.target.value)}
                            type="text"
                            placeholder="제목을 입력해주세요"
                        />
                    </div>
                </div>
            </form>
            <div className="mt-8">
                {postsError && <div>데이터를 불러올 수 없습니다</div>}
                <Table data={postData?.results ?? []} columns={columns} />
                {/* TODO : 페이지네이션 렌더링 및 실제 이동 */}
            </div>
        </>
    );
}
