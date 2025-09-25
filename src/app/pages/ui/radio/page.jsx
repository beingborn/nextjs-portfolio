'use client';

import { useState } from 'react';
import { Radio, RadioGroup } from '@/app/components/common';

export default function RadioTestPage() {
    const [plan, setPlan] = useState('react');

    return (
        <div className="flex flex-col gap-4">
            <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
                <Radio value="react">리액트</Radio>
                <Radio value="vue">뷰</Radio>
                <Radio value="angular">앵귤러</Radio>
                <Radio value="jquery">제이쿼리</Radio>
            </RadioGroup>
            <p>
                당신은 <strong>{plan}</strong>개발자군요!
            </p>
        </div>
    );
}
