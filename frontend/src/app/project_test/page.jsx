'use client';

import useDataApi from '../../../hooks/useDataApi';

export default function ProjectTest() {
    const { data, loading, error } = useDataApi('/api/project');

    if (loading || !data) {
        return <div>로딩 중..</div>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <ul>
            {data?.map((project) => (
                <li key={project.id}>
                    <a href={project.link}>
                        <img src={project.thumbnail} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>
                            {project.start_date} ~ {project.end_date}
                        </p>
                        <p>{project.project_members}명</p>
                        <span>{project.type}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}
