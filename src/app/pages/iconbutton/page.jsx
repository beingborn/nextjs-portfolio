'use client';

import { IconButton } from '@/app/components/common';
import {
    Heart,
    Star,
    Download,
    Upload,
    Settings,
    User,
    Mail,
    Phone,
    Search,
    Plus,
    Minus,
    Check,
    X,
} from 'lucide-react';

export default function IconButtonPage() {
    return (
        <div className="p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">IconButton 컴포넌트 테스트</h1>
                <p className="text-gray-600">
                    아이콘이 포함된 버튼 컴포넌트의 다양한 사용 예시입니다.
                </p>
            </div>

            {/* 기본 아이콘 버튼들 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">기본 아이콘 버튼 (왼쪽 아이콘)</h2>
                <div className="flex flex-wrap gap-4">
                    <IconButton icon={<Heart />}>좋아요</IconButton>

                    <IconButton icon={<Star />}>즐겨찾기</IconButton>

                    <IconButton icon={<Download />}>다운로드</IconButton>

                    <IconButton icon={<Upload />}>업로드</IconButton>
                </div>
            </div>

            {/* 오른쪽 아이콘 버튼들 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">오른쪽 아이콘 버튼</h2>
                <div className="flex flex-wrap gap-4">
                    <IconButton icon={<Settings />} iconPosition="right">
                        설정
                    </IconButton>

                    <IconButton icon={<User />} iconPosition="right">
                        프로필
                    </IconButton>

                    <IconButton icon={<Mail />} iconPosition="right">
                        메시지
                    </IconButton>

                    <IconButton icon={<Phone />} iconPosition="right">
                        전화
                    </IconButton>
                </div>
            </div>

            {/* 아이콘만 있는 버튼들 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">아이콘만 있는 버튼</h2>
                <div className="flex flex-wrap gap-4">
                    <IconButton icon={<Search />} />
                    <IconButton icon={<Plus />} />
                    <IconButton icon={<Minus />} />
                    <IconButton icon={<Check />} />
                    <IconButton icon={<X />} />
                </div>
            </div>

            {/* 다양한 스타일 변형 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">커스텀 스타일</h2>
                <div className="flex flex-wrap gap-4">
                    <IconButton icon={<Heart />} className="bg-red-500 hover:bg-red-600">
                        빨간 하트
                    </IconButton>

                    <IconButton icon={<Star />} className="bg-yellow-500 hover:bg-yellow-600">
                        노란 별
                    </IconButton>

                    <IconButton icon={<Check />} className="bg-green-500 hover:bg-green-600">
                        초록 체크
                    </IconButton>

                    <IconButton icon={<X />} className="bg-gray-500 hover:bg-gray-600">
                        회색 X
                    </IconButton>
                </div>
            </div>

            {/* 비활성화된 버튼들 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">비활성화된 버튼</h2>
                <div className="flex flex-wrap gap-4">
                    <IconButton icon={<Download />} disabled>
                        비활성화됨
                    </IconButton>

                    <IconButton icon={<Upload />} disabled>
                        업로드 불가
                    </IconButton>
                </div>
            </div>

            {/* 이벤트 핸들러 테스트 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">이벤트 핸들러 테스트</h2>
                <div className="flex flex-wrap gap-4">
                    <IconButton icon={<Heart />} onClick={() => alert('좋아요를 눌렀습니다!')}>
                        클릭해보세요
                    </IconButton>

                    <IconButton icon={<Settings />} onClick={() => console.log('설정 버튼 클릭됨')}>
                        콘솔 로그
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
