'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProjectTest() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://127.0.0.1:8000/api/guestbook');

            setData(response.data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    if (loading || !data) {
        return <div>로딩 중..</div>;
    }

    return (
        <ul>
            {data?.map((guest) => (
                <li key={guest.id}>
                    <p>{guest.title}</p>
                    <p>{guest.author}</p>
                    <p>{guest.text}</p>
                    <p
                        style={{
                            backgroundColor: guest.color,
                        }}
                    >
                        {guest.color}
                    </p>
                </li>
            ))}
        </ul>
    );
}
