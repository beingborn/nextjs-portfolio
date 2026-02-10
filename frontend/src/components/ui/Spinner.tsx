interface SpinnerProps {
    size?: number;
    className?: string;
}

export default function Spinner({ size = 40, className }: SpinnerProps) {
    return (
        <>
            <svg
                style={{ width: size, height: size }}
                className="aspect-square animate-spin"
                viewBox="0 0 100 100"
            >
                <circle
                    fill="none"
                    strokeWidth="10"
                    className="stroke-bg-element"
                    cx="50"
                    cy="50"
                    r="40"
                />
                <circle
                    fill="none"
                    strokeWidth="10"
                    className={`stroke-secondary-500 ${className}`}
                    strokeDasharray="250"
                    strokeDashoffset="210"
                    cx="50"
                    cy="50"
                    r="40"
                />
            </svg>
            <span className="sr-only">로딩중입니다...</span>
        </>
    );
}
