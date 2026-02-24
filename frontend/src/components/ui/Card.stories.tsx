import type { Meta, StoryObj } from '@storybook/nextjs';
import Card from './Card';

// 스토리북 메타 정보: 사이드바 경로, 대상 컴포넌트, 기본 제어값을 설정합니다.
const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
    subcomponents: { Body: Card.Body },
    tags: ['autodocs'],
};

export default meta;

// 각 스토리의 공통 타입(타입 안정성 보장)
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: '카드 본문 내용 테스트',
    },
    render: (args) => (
        <Card>
            <Card.Body>
                <h2 className="text-2xl font-bold">카드 제목</h2>
                {args.children}
            </Card.Body>
        </Card>
    ),
};
