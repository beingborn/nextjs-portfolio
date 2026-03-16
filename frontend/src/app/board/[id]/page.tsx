'use client';

import { Button, Loading } from '@/components/ui';
import API from '@/constants/api';
import useFetch from '@/hooks/useFetch';
import { useParams } from 'next/navigation';
import { PostEntity } from 'types';

export default function BoardDetail() {
    const params = useParams<{ id: string }>();
    const { id } = params;

    const {
        data: postDetailData,
        error: postDetailError,
        loading,
    } = useFetch<PostEntity>(API.BOARD + '/' + id);

    if (loading) return <Loading />;
    if (postDetailError) return <div>오류가 발생했습니다</div>;

    // console.log(postDetailData);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center h-10 border-b border-b-border-primary-500">
                <h2 className="font-bold text-2xl">{postDetailData?.title}</h2>
            </div>
            <div>
                <div className="flex items-center gap-2 text-text-sub">
                    <div>작성자 : 이민혁</div> |<div>작성일 : {postDetailData?.created_at}</div> |
                    <div>수정일 : {postDetailData?.modified_at}</div>
                </div>
                <div className="mt-4 min-h-20 max-h-24 overflow-auto">
                    <p>{postDetailData?.content}</p>
                </div>

                <div className="flex items-center h-10">
                    <div>첨부파일 : </div>
                    <p>{postDetailData?.files}</p>
                    <Button>다운로드</Button>
                </div>
            </div>
        </div>
    );
}
