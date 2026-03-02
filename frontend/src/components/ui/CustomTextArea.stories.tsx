import type { Meta, StoryObj } from '@storybook/nextjs';
import { Component } from 'lucide-react';
import CustomTextArea from './CustomTextArea';

const meta = {
    title: 'UI/TextArea',
    component: CustomTextArea,
    decorators: [
        (Story) => (
            <section className="max-w-md p-4">
                <Story />
            </section>
        ),
    ],
    args: {
        label: '라벨',
        placeholder: '플레이스홀더',
        message: '메시지는 Info, Error, Warning 상태에서만 출력됩니다.',
    },
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        message: { control: 'text' },
        placeholder: { control: 'text' },
        state: { control: 'select', options: ['success', 'info', 'warning', 'error'] },
    },
} satisfies Meta<typeof CustomTextArea>;

export default meta;

// 각 스토리의 공통 타입(타입 안정성 보장)
type Story = StoryObj<typeof CustomTextArea>;

// 기본 상태 텍스트영역 (meta.args 기본값 사용)
export const Default: Story = {};

// Disabled
export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

// State
export const States: Story = {
    args: {
        message: '12자 이상 입력하세요',
        state: 'error',
    },
};

export const WithChildren: Story = {
    args: {
        children: (
            <div className="absolute right-2 bottom-2">
                <Component />
            </div>
        ),
        placeholder: '내용을 입력하세요',
    },
};
