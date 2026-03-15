import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

/* T: 제네릭 타입 (사용 시 타입 정해짐) */
export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /* 
        useCallback => 함수 참조 고정 

        URL이 변경되지 않는 이상 같은 함수 사용 
        URL 변경 시 > 자동 함수 재 요청 
    */
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await axios.get<T>(url);
            setData(response.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setError(e.message);
            } else {
                setError('알 수 없는 에러');
            }
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, fetchData };
}
