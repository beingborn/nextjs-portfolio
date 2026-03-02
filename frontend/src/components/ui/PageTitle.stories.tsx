import PageTitle from '@/components/ui/PageTitle';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
    title: 'UI/PageTitle',
    component: PageTitle,
    decorators: [
        (Story) => (
            <section className="max-w-md p-4">
                <Story />
            </section>
        ),
    ],
    args: {
        title: '공용 페이지 타이틀 H1',
    },
    argTypes: {
        title: {
            control: 'text',
        },
    },
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {};
