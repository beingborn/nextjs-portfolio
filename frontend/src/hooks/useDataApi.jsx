import axios from 'axios';
import { useEffect, useState } from 'react';

const API = 'http://127.0.0.1:8000';

export default function useDataApi(url) {
    const [data, setData] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`${API}${url}`);

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${API}${url}`);

                setData(response.data);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setError(e);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}
