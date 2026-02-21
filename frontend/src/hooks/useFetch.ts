import axios from 'axios';
import { useEffect, useState } from 'react';

/* 
    T: 제네릭 타입 (사용 시 타입 정해짐)
*/
export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<T>(url);

                setData(response.data);
                setIsLoading(false);
            } catch (e) {
                /* 에러의 타입이 unknown이라 axios.isAxiosError로 타입 좁히기 */

                if (axios.isAxiosError(e)) {
                    setError(e.message);
                } else {
                    setError('알수 없는 에러가 발생했습니다');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}
