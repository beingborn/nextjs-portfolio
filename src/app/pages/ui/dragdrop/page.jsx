'use client';

import { useRef, useState } from 'react';

// 추후 투두 :
// Sidebar 메뉴 순서 변경

export default function DragAndDrop() {
    const [list, setList] = useState([
        '마이페이지',
        '블로그 홈',
        '카페',
        '오리온',
        '카러플',
        '손세정제',
    ]);

    const dragItem = useRef();
    const dragOverItem = useRef();

    // 드래그 시작될 때 실행
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    };

    // 드래그중인 대상이 위로 포개졌을 때
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };

    // 드랍 (커서 뗐을 때)
    const drop = () => {
        const newList = [...list]; // 업데이트 할 배열
        const dragItemValue = newList[dragItem.current]; // 드래그된 요소 찾기

        newList.splice(dragItem.current, 1); // 드래그 시작 인덱스 제거
        newList.splice(dragOverItem.current, 0, dragItemValue); // 드래그 올라간 요소 뒤로 drag된 요소 추가하기

        // 드래그 요소 초기화
        dragItem.current = null;
        dragOverItem.current = null;
        setList(newList);
    };

    return (
        <div>
            {list.map((item, idx) => (
                <div
                    className="cursor-pointer bg-amber-50 p-4 text-center font-bold text-2xl border border-amber-300"
                    key={idx}
                    draggable
                    onDragStart={(e) => dragStart(e, idx)}
                    onDragEnter={(e) => dragEnter(e, idx)}
                    onDragEnd={drop}
                    onDragOver={(e) => e.preventDefault()}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}
