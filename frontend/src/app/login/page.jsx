'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Input } from '../../components/common';

export default function Login() {
    const router = useRouter();
    const [type, setType] = useState('password');
    const [form, setForm] = useState({
        id: '',
        pw: '',
    });

    const [error, setError] = useState({
        id: '',
        pw: '',
    });

    function handleType() {
        setType((prevType) => {
            if (prevType === 'password') {
                return 'text';
            } else {
                return 'password';
            }
        });
    }

    function handleInput(name, event) {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: event.target.value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        setError((prevError) => ({
            ...prevError,
            id: '아이디가 틀립니다.',
        }));

        router.push('/');
    }

    const submitCondition = form.id.length < 8 || form.pw.length < 8;

    return (
        <div className="w-full h-screen bg-bg-light">
            <div className="fixed top-[50%] left-[50%] transform -translate-x-6/12 -translate-y-6/12">
                <div className="bg-white drop-shadow-zinc-500 p-15 min-w-[400px]">
                    <div className="mb-8">
                        <h1>
                            <a href="/" className="flex items-center gap-2 text-xl font-bold">
                                <CodeXml size="40" />
                                Mhlee React Developer
                            </a>
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="id">아이디</label>
                                <Input
                                    type="text"
                                    id="id"
                                    className="w-full"
                                    value={form.id}
                                    error={error.id}
                                    onChange={(e) => handleInput('id', e)}
                                    placeholder="ID를 입력하세요."
                                    maxLength="20"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="pw">비밀번호</label>
                                <Input
                                    value={form.pw}
                                    id="pw"
                                    error={error.pw}
                                    icon={
                                        type === 'password' ? (
                                            <EyeClosed size="20" onClick={handleType} />
                                        ) : (
                                            <Eye size="20" onClick={handleType} />
                                        )
                                    }
                                    className="w-full"
                                    onChange={(e) => handleInput('pw', e)}
                                    type={type}
                                    placeholder="PW를 입력하세요."
                                    maxLength="20"
                                />
                            </div>
                            <Button type="submit" disabled={submitCondition}>
                                로그인
                            </Button>
                        </div>
                    </form>
                    <div className="flex gap-2 justify-center mt-4">
                        <a href="signup" className="text-text-sec">
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
