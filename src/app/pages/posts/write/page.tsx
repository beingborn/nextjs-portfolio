'use client';

import Button from '@/app/components/common/Button';
import Input from '@/app/components/common/Input';
import { TableCell, TableHead } from '@/app/components/common/Table';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/* 
    - input 데이터 값 받기
    - 등록 버튼 클릭 시 유효성 검사하기
    - Post Json 데이터 추가
*/

export default function PostWrite() {
    const router = useRouter();

    const [userInput, setUserInput] = useState({
        title: '',
        body: '',
    });

    const fieldUpdate = (field: string, value: string) => {
        setUserInput((prevInput) => ({
            ...prevInput,
            [field]: value,
        }));

        console.log('유저 입력값', userInput);
    };

    const postUpdate = async () => {
        /* case 1 : 공백 값 확인 */
        if (userInput.title === '') {
            alert('제목을 입력해주세요.');
        }
        if (userInput.body === '') {
            alert('내용을 입력해주세요.');
        }

        await axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                title: userInput.title,
                body: userInput.body,
            })
            .then(function (response) {
                console.log(response.data);

                alert('글이 작성되었습니다. 1초 뒤 게시물 리스트로 이동합니다.');

                setTimeout(() => {
                    router.push('/pages/posts');
                }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <table className="w-full table-fixed">
                <caption className="sr-only">글쓰기</caption>
                <colgroup>
                    <col className="w-[180px]" />
                    <col />
                </colgroup>
                <tbody>
                    <tr>
                        <TableHead>제목</TableHead>
                        <TableCell>
                            <Input
                                type="text"
                                className="w-full h-[30px]"
                                value={userInput.title}
                                placeholder="제목을 입력하세요."
                                onChange={(e) => {
                                    fieldUpdate('title', e.target.value);
                                }}
                            />
                        </TableCell>
                    </tr>
                    <tr>
                        <TableHead>내용</TableHead>
                        <TableCell>
                            <Input
                                type="text"
                                className="w-full h-[30px]"
                                value={userInput.body}
                                placeholder="내용을 입력하세요."
                                onChange={(e) => {
                                    fieldUpdate('body', e.target.value);
                                }}
                            />
                        </TableCell>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end mt-5">
                <Button type="button" onClick={() => postUpdate()}>
                    등록
                </Button>
            </div>
        </div>
    );
}
