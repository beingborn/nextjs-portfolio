import { InputState } from '@/components/ui/CustomInput';
export interface GuestbookEntity {
    id: number;
    title: string;
    author: string;
    text: string;
    color: string;
}

export interface ProjectEntity {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    start_date: string;
    end_date: string;
    project_members: 3;
    link: string;
    skills: string[];
    type: 'sideproject' | 'workproject';
}

// 페이지네이션 응답값
export type PaginatedResponse<T> = {
    num_pages: number;
    number: number;
    per_page: number;
    count: number;
    next: boolean;
    previous: boolean;
    results: T[];
};

export interface PostEntity {
    id: number;
    title: string;
    author: string;
    files: string | null;
    created_at: string;
    modified_at: string;
    content: string;
}

export interface FieldState {
    state: InputState;
    message: string;
}

export interface ErrorState {
    author: FieldState;
    title: FieldState;
    text: FieldState;
}
