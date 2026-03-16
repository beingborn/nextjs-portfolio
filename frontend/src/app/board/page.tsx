'use client';

import { CustomInput, Loading, PageTitle, SelectBox, Table } from '@/components/ui';
import { Column } from '@/components/ui/Table';
import API from '@/constants/api';
import useFetch from '@/hooks/useFetch';
import { ChevronLeft, ChevronRight, Paperclip } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
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
    const router = useRouter();
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchCategory, setSearchCategory] = useState<string>('title');
    const [searchInput, setSearchInput] = useState<string>('');
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || 1;

    const {
        data: postData,
        error: postsError,
        loading,
    } = useFetch<PaginatedResponse<PostEntity>>(API.BOARD + `?page=${page}&page_size=${pageSize}`);

    const handleSearchInput = (value: string) => {
        setSearchInput(value);
    };

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(e.target.value));

        router.push(`/board?page=${page}&page_size=${pageSize}`);
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

    if (postsError) console.log('데이터 페칭 오류');

    return (
        <>
            <PageTitle title="게시판" />
            {/* TODO :: 검색 기능 구현 */}
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
                {/* {postsError && <p>데이터를 불러오는데 문제가 발생했습니다</p>} */}
                {loading ? <Loading /> : <Table data={postData?.results ?? []} columns={columns} />}
                <div className="flex justify-center mt-5">
                    <div className="flex items-center gap-2">
                        {postData?.previous && (
                            <a href={`/board?page=${postData?.number - 1}`}>
                                <ChevronLeft size={28} />
                                <span className="sr-only">이전으로</span>
                            </a>
                        )}

                        <ul className="flex items-center gap-2">
                            {Array.from({ length: Number(postData?.num_pages) }, (_, i) => (
                                <li key={i + 1}>
                                    <a
                                        className={`inline-flex items-center justify-center w-8 h-8 rounded-md ${postData?.number == i + 1 && 'bg-secondary-500 text-white'}`}
                                        href={`../board?page=${i + 1}`}
                                    >
                                        {i + 1}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {postData?.next && (
                            <a href={`/board?page=${postData?.number + 1}`}>
                                <ChevronRight size={28} />
                                <span className="sr-only">다음으로</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
