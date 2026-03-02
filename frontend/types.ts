import { InputState } from '@/components/ui/CustomInput';
export interface GuestbookEntity {
    id: number;
    title: string;
    author: string;
    text: string;
    color: string;
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
