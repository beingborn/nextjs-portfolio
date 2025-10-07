import axios from 'axios';
import { useEffect, useState } from 'react';

const API = 'http://127.0.0.1:8000';

export default function useDataApi(url) {
    const [data, setData] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, fetchData };
}
