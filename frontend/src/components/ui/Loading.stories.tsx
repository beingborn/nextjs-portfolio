import Loading from '@/components/ui/Loading';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
    title: 'UI/Loading',
    component: Loading,
    decorators: [
        (Story) => (
            <section className="max-w-md p-4">
                <Story />
            </section>
        ),
    ],
    args: {
        text: '',
    },
    argTypes: {
        text: {
            control: 'text',
        },
    },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
