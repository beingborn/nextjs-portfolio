### 컴포넌트 세팅 가이드

## 1. 스토리 파일생성

- ex: 컴포넌트명.stories.tsx

## 메타 정보 정의

- `meta`는 스토리북 사이드바 경로, 대상 컴포넌트, 기본 제어값을 설정합니다.
- 이 프로젝트에서는 `satisfies Meta<typeof Component>` 패턴을 권장합니다.

예시 :

```tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import Button from '@/components/ui/Button';

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: '버튼',
        variant: 'contained',
        intent: 'primary',
    },
    argTypes: {
        variant: { control: 'select', options: ['contained', 'outline', 'text'] },
        intent: { control: 'select', options: ['primary', 'secondary'] },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;
```

### args / argTypes 기재

- `args`: 컴포넌트에 전달되는 기본 Props 값
- `argTypes`: Controls에서 어떻게 편집 / 표시

## 현 프로젝트 세팅 목록 현황

- [v] Button
- [v] Card
- Form
    - [v] CustomInput
    - [v] CustomTextArea
- [v] Loading
- [v] PageTitle
