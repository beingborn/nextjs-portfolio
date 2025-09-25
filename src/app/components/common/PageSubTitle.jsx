export default function PageSubTitle({ title, className }) {
    return <p className={`text-md mb-4 font-medium text-text-sec ${className}`}>{title}</p>;
}
