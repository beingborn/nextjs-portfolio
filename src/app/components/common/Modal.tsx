import React from 'react';

/**
 * 모달 조건부 제어
 *
 * 상태
 *  - 조건 1 : 백드롭 클릭 시 Hide
 *  - 조건 2 : true 일 경우 Show
 *
 * Props
 *   - children 하위 노드 출력
 */

interface ModalProps {
    children?: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-screen bg-black/60 z-10"
                onClick={onClose}
            ></div>
            <dialog
                open
                className="mx-auto border-none rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-0 overflow-hidden z-10"
            >
                {children}
            </dialog>
        </>
    );
};

export default Modal;
