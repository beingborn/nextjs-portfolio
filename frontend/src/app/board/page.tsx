'use client';

import { CustomInput, PageTitle, SelectBox } from '@/components/ui';
import { useState } from 'react';

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
            <div>
                <table>
                    <caption>테이블 설명</caption>
                    <thead>
                        <tr>
                            <th>제목1</th>
                            <th>제목2</th>
                            <th>제목3</th>
                            <th>제목4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>본문1</td>
                            <td>본문2</td>
                            <td>본문3</td>
                            <td>본문4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
