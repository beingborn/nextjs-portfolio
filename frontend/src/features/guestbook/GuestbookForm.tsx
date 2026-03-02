import { Button, CustomInput, CustomTextArea } from '@/components/ui';
import { cn } from '@/utils/style';
import { ErrorState, GuestbookEntity } from 'types';

/* Interface는 속성 확장 + Omit 등을 이용해 기존 타입을 별칭할 경우 type이 더 적합 */
type GuestbookForm = Omit<GuestbookEntity, 'id'>;

interface GuestbookFormProps {
    form: GuestbookForm;
    colors: string[];
    disabled: boolean;
    onFieldChange: (name: string, value: string) => void;
    error: ErrorState;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function GuestbookForm({
    form,
    colors,
    disabled,
    error,
    onFieldChange,
    onSubmit,
}: GuestbookFormProps) {
    return (
        <div className="shrink-0 w-70 p-4 mb-6" style={{ backgroundColor: form.color }}>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        {colors.map((color) => (
                            <button
                                disabled={disabled}
                                type="button"
                                className={cn(
                                    'w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform',
                                    {
                                        'w-8 h-8 border-2': form.color === color,
                                    },
                                )}
                                key={color}
                                value={color}
                                onClick={() => onFieldChange('color', color)}
                                style={{ backgroundColor: color }}
                            ></button>
                        ))}
                    </div>
                    <CustomInput
                        disabled={disabled}
                        value={form.author}
                        maxLength={10}
                        state={error.author.state}
                        message={error.author.message}
                        onChange={(e) => onFieldChange('author', e.target.value)}
                        placeholder="작성자명을 입력하세요"
                    >
                        <p className="absolute right-2 top-5 -translate-y-1/2 text-text-muted">
                            <span>{form.author.length}</span>/<span>10</span>
                        </p>
                    </CustomInput>
                    <CustomInput
                        disabled={disabled}
                        value={form.title}
                        state={error.title.state}
                        message={error.title.message}
                        maxLength={15}
                        onChange={(e) => onFieldChange('title', e.target.value)}
                        placeholder="제목을 입력하세요"
                    >
                        <p className="absolute right-2 top-5 -translate-y-1/2 text-text-muted">
                            <span>{form.title.length}</span>/<span>15</span>
                        </p>
                    </CustomInput>
                    <CustomTextArea
                        disabled={disabled}
                        placeholder="내용을 입력하세요"
                        className="h-50"
                        state={error.text.state}
                        message={error.text.message}
                        value={form.text}
                        onChange={(e) => onFieldChange('text', e.target.value)}
                        maxLength={100}
                    >
                        <p className="absolute right-2 bottom-2 text-text-muted">
                            <span>{form.text.length}</span>/<span>100</span>
                        </p>
                    </CustomTextArea>
                    <Button disabled={disabled} type="submit">
                        완료
                    </Button>
                </div>
            </form>
        </div>
    );
}
