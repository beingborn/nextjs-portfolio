'use client';

import { Card, CustomInput } from '@/components/ui';
import { GuideCardTitle } from '@/features/ui/components';
import { useEffect, useRef, useState } from 'react';

export default function CustomInputTest() {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            <Card>
                <Card.Body>
                    <GuideCardTitle>Default</GuideCardTitle>

                    <div className="flex flex-col gap-2 items-start">
                        <div className="w-80">
                            <CustomInput
                                ref={inputRef}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="기본 형태"
                            />
                        </div>
                        <div className="w-80">
                            <CustomInput label="입력" placeholder="라벨 형태" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>State</GuideCardTitle>

                    <div className="flex flex-col gap-2 items-start">
                        <div className="w-80">
                            <CustomInput
                                state="success"
                                message="조건에 부합합니다"
                                placeholder="Error"
                            />
                        </div>
                        <div className="w-80">
                            <CustomInput
                                state="info"
                                message="조건에 부합하나 OO이 부족"
                                placeholder="Info"
                            />
                        </div>
                        <div className="w-80">
                            <CustomInput
                                state="warning"
                                message="번호가 같을 경우 OO 할 수 있음"
                                placeholder="Warning"
                            />
                        </div>
                        <div className="w-80">
                            <CustomInput
                                state="error"
                                message="조건이 충족하지 않습니다"
                                placeholder="Error"
                            />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
