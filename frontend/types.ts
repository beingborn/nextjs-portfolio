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

export interface FieldState {
    state: InputState;
    message: string;
}

export interface ErrorState {
    author: FieldState;
    title: FieldState;
    text: FieldState;
}
