import { Button, Card } from '@/components/ui';
import { cn } from '@/utils/style';
import Image from 'next/image';
import { ProjectEntity } from 'types';

interface ProjectListProps {
    projectList: ProjectEntity[];
    onOpenModal: (project: ProjectEntity) => void;
}

export default function ProjectList({ projectList, onOpenModal }: ProjectListProps) {
    if (projectList.length === 0) {
        return <p className="mt-4 text-text-sub">프로젝트가 없습니다.</p>;
    }

    return (
        <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-8">
            {projectList.map((project) => (
                <Card key={project.id}>
                    <Card.Body>
                        <div className="relative">
                            <span
                                className={cn(
                                    'min-w-13 inline-flex justify-center items-center rounded-xs text-xs p-1 absolute top-2 right-2 text-white',
                                    project.type === 'workproject'
                                        ? 'bg-secondary-100'
                                        : 'bg-secondary-300',
                                )}
                            >
                                {project.type}
                            </span>
                            <div className="flex items-center gap-2">
                                {project.skills.map((skill) => (
                                    <Image
                                        key={skill}
                                        src={`/icon/ico_${skill}.svg`}
                                        width={24}
                                        height={24}
                                        alt={skill}
                                    />
                                ))}
                            </div>
                            <h3 className="text-xl font-bold my-4">{project.title}</h3>
                            <p className="text-text-sub mb-3">{project.description}</p>
                            <Button onClick={() => onOpenModal(project)}>상세보기</Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
