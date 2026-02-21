export default function PageTitle({ title, className }: { title: string; className?: string }) {
    return <h2 className={`text-2xl font-bold mb-4 ${className}`}>{title}</h2>;
}
