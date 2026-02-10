export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col rounded-md shadow-sm bg-bg-surface">{children}</div>
    );
}

function Body({ children }: { children: React.ReactNode }) {
    return <div className="p-4">{children}</div>;
}

Card.Body = Body;
