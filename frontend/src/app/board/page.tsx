'use client';

import { CustomInput, PageTitle, SelectBox } from '@/components/ui';
import { useState } from 'react';

const viewOptions = [
    { label: '10개씩 보기', value: 10 },
    { label: '20개씩 보기', value: 20 },
    { label: '30개씩 보기', value: 30 },
];

export default function Board() {
    const [opt, setOpt] = useState<string | null>(null);

    const handleOptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOpt(e.target.value);
        console.log(opt);
    };

    return (
        <>
            <PageTitle title="게시판" />

            <div className="flex items-center justify-between">
                <SelectBox onChange={handleOptChange} options={viewOptions} />
                <div className="flex items-center gap-2">
                    <select name="" id="">
                        <option value="">옵션4</option>
                        <option value="">옵션5</option>
                        <option value="">옵션6</option>
                    </select>
                    <CustomInput type="text" placeholder="제목을 입력해주세요" />
                </div>
            </div>
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
