'use client';

import useDataApi from '../../../hooks/useDataApi';

export default function ProjectTest() {
    const { data, loading, error } = useDataApi('/api/guestbook');

    if (loading || !data) {
        return <div>로딩 중..</div>;
    }

    if (error) {
        return <p>{error.message}</p>;
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
