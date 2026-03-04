'use client';

import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Portal은 서버에서 렌더링하지 않고, 클라이언트에서만 실행
const Portal = dynamic(() => import('./Portal'), { ssr: false });

interface CommonModalProps {
    title?: string;
    onClose: () => void;
    isOpen: boolean;
    children: React.ReactNode;
}

export default function CommonModal({ title, onClose, isOpen, children }: CommonModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    if (isOpen) {
        return (
            <Portal>
                <div
                    className="flex items-center justify-center fixed top-0 left-0 w-full h-screen bg-black/60 z-1000"
                    onClick={onClose}
                >
                    <div
                        className="relative z-1001 w-full max-w-3xl max-h-[calc(100vh-40px)] overflow-y-auto"
                        id="modal"
                        // 클릭 이벤트 전파 방지
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Content */}
                        <div className="bg-white p-8 min-h-100 rounded-lg shadow-sm ">
                            {/* Modal Header */}
                            <div className="pb-4 border-b border-border-primary-500 flex justify-between">
                                <h2 className="text-xl font-bold">{title}</h2>
                                <button type="button" onClick={onClose}>
                                    <X size="20" />
                                </button>
                            </div>
                            {/* Modal Body */}
                            <div className="pt-4 px-2">{children}</div>
                        </div>
                    </div>
                </div>
            </Portal>
        );
    }
}
