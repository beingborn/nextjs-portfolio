import { Button, CustomInput } from '@/components/ui';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function ContactSection() {
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        const form = formRef.current;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
            )
            .then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('이메일 전송이 완료되었습니다! 빠른 시일 내에 답장 드리겠습니다.');
                    form.reset();
                },
                function (error) {
                    console.log('FAILED...', error);
                },
            );
    };

    return (
        <section className="mt-8 w-full max-w-5xl">
            <div className="mb-4 flex flex-col gap-2">
                <h2 className="text-3xl font-bold">Contact</h2>
                <p className="text-text-sub">궁금한 점이 있으시다면 연락 바랍니다.</p>
            </div>
            <form ref={formRef} onSubmit={sendEmail}>
                <div className="flex flex-col gap-4">
                    <CustomInput
                        label="이메일"
                        type="email"
                        name="email"
                        placeholder="abc@naver.com"
                        required
                    />
                    <CustomInput
                        label="문의 제목"
                        type="text"
                        name="title"
                        placeholder="20자 이내 입력"
                        required
                    />
                    <CustomInput
                        label="성함"
                        type="text"
                        name="name"
                        placeholder="홍길동"
                        required
                    />
                    <textarea
                        placeholder="내용을 입력해주세요. 100자 이내"
                        maxLength={100}
                        name="message"
                        className="rounded-md p-2 resize-none min-h-40 border border-border-primary-500"
                    ></textarea>
                    <Button type="submit">제출</Button>
                </div>
            </form>
        </section>
    );
}
