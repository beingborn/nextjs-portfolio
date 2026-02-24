import type { Meta, StoryObj } from '@storybook/nextjs';
import Button from './Button';

// 스토리북 메타 정보: 사이드바 경로, 대상 컴포넌트, 기본 제어값을 설정합니다.
const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: '버튼',
        variant: 'contained',
        intent: 'primary',
        size: 'md',
        fullWidth: false,
        loading: false,
        disabled: false,
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['contained', 'outline', 'text'],
        },
        intent: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        fullWidth: { control: 'boolean' },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
};

export default meta;

// 각 스토리의 공통 타입(타입 안정성 보장)
type Story = StoryObj<typeof Button>;

// 기본 상태 버튼
export const Default: Story = {};

// 보조 색상 아웃라인 버튼
export const OutlineSecondary: Story = {
    args: {
        variant: 'outline',
        intent: 'secondary',
        children: '아웃라인 테스트',
    },
};

// 텍스트 형태 버튼
export const TextPrimary: Story = {
    args: {
        variant: 'text',
        intent: 'primary',
        children: '텍스트 버튼',
    },
};

// 로딩 상태 버튼
export const Loading: Story = {
    args: {
        loading: true,
        children: '로딩 중',
    },
};

// 비활성화 상태 버튼
export const Disabled: Story = {
    args: {
        disabled: true,
        children: '비활성화',
    },
};
