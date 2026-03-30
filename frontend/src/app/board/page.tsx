'use client';

import { PageTitle } from '@/components/ui';
import BoardSearch from '@/features/board/boardSearch';
import { Suspense } from 'react';

export default function Board() {
    return (
        <>
            <PageTitle title="게시판" />
            <Suspense fallback={'<p>게시판 로딩중..</p>'}>
                <BoardSearch />
            </Suspense>
        </>
    );
}
