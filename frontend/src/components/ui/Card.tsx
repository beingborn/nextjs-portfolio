export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col rounded-md border border-border-primary-300">
            {children}
        </div>
    );
}

function Body({ children }: { children: React.ReactNode }) {
    return <div className="p-4">{children}</div>;
}

Card.Body = Body;
