'use client';

import { PageTitle, PageSubTitle, SelectBox, Input } from '@/app/components/common';
import { COMPONENTS } from './MockData.js';
import { useState, useMemo } from 'react';

export default function UIpage() {
    const [filterValue, setFilterValue] = useState({
        title: '',
        type: '',
    });

    const handleFilterChange = (name, event) => {
        setFilterValue((prevFilter) => ({
            ...prevFilter,
            [name]: event.target.value,
        }));
    };

    const filteredList = useMemo(() => {
        return COMPONENTS.filter(
            (component) => !filterValue.title || component.title === filterValue.title,
        ).filter((component) => !filterValue.type || component.type === filterValue.type);
    }, [COMPONENTS, filterValue]);

    return (
        <>
            <PageTitle title="UI 컴포넌트 테스트" />
            <div className="p-4 bg-blue-50 rounded-2xl mb-6">
                <p>
                    직접 만든 컴포넌트를 테스트하는 페이지입니다. 평소 만들어보고 싶은 컴포넌트가
                    있을 때 해당 페이지에서 테스트합니다.
                </p>
                <p>
                    컴포넌트는 아토믹 방법론에 따라 분류합니다. 궁금하시다면 &nbsp;
                    <a
                        className="underline text-blue-500"
                        href="https://atomicdesign.bradfrost.com/table-of-contents/"
                    >
                        아토믹 디자인
                    </a>
                    을 방문하세요.
                </p>
            </div>
            <div className="flex flex-col gap-5 max-w-[1440px]">
                <div className="flex items-center justify-between">
                    <div>
                        <strong>컴포넌트 총 {filteredList.length}개</strong>
                    </div>
                    <div className="flex items-center gap-4">
                        <SelectBox
                            value={filterValue.type}
                            onChange={(e) => handleFilterChange('type', e)}
                        >
                            <option value="">전체</option>
                            <option value="Atom">아톰</option>
                            <option value="Molecule">모큘</option>
                            <option value="Organism">올가니즘</option>
                        </SelectBox>
                        <Input
                            value={filterValue.title}
                            onChange={(e) => handleFilterChange('title', e)}
                            type="text"
                            placeholder="컴포넌트명 입력하세요"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-8">
                    {filteredList.length > 0 ? (
                        filteredList.map((component) => (
                            <div key={component.title} id="card">
                                <a href={component.href || '#'}>
                                    <div
                                        className="relative w-full mb-2 aspect-3/2 overflow-hidden rounded-xl bg-[#61758f] flex items-center justify-center"
                                        id="card-thumb"
                                    >
                                        {component.icon}
                                        <span className="text-xs absolute top-4 right-4 inline-flex rounded-sm p-1 self-end bg-blue-100 text-[#0b50d0]">
                                            {component.type}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1" id="card-content">
                                        <h3 className="font-bold">{component.title}</h3>
                                        <p className="text-text-sec">{component.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <div>해당 조건의 데이터가 없습니다.</div>
                    )}
                </div>
            </div>
        </>
    );
}
