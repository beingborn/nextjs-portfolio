'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import CustomCheckbox from '@/app/components/common/CustomCheckbox';

export default function CheckboxTest() {
    const [isTermsCheckNo1, setIsTermsCheckNo1] = useState(false);
    const [isTermsCheckNo2, setIsTermsCheckNo2] = useState(false);
    const [isTermsCheckNo3, setIsTermsCheckNo3] = useState(false);

    // 약관 동의
    const isAllChecked = isTermsCheckNo1 && isTermsCheckNo2 && isTermsCheckNo3;
    const handleAllCheck = () => {
        const newValue = !isAllChecked;
        setIsTermsCheckNo1(newValue);
        setIsTermsCheckNo2(newValue);
        setIsTermsCheckNo3(newValue);
    };

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CustomCheckbox checked={isAllChecked} onChange={handleAllCheck} />
                <p>전체 동의</p>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CustomCheckbox checked={isTermsCheckNo1} onChange={setIsTermsCheckNo1} />
                <p>1번 동의란</p>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CustomCheckbox checked={isTermsCheckNo2} onChange={setIsTermsCheckNo2} />
                <p>2번 동의란</p>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CustomCheckbox checked={isTermsCheckNo3} onChange={setIsTermsCheckNo3} />
                <p>3번 동의란</p>
            </Box>
        </>
    );
}
