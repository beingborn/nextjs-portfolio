import Image from 'next/image';

interface LoadingProps {
    size: string;
    message: string;
    isReady: boolean;
}

const Loading = ({ size, message, isReady }: LoadingProps) => {
    const squareSize = size === 'sm' ? 50 : 100;

    if (isReady) {
        return (
            <div className="fixed bottom-0 left-0 w-full h-full bg-blue-50 flex justify-center items-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <Image
                        src="/images/loading.gif"
                        alt="loading"
                        width={squareSize}
                        height={squareSize}
                    />
                    <p className="font-bold text-2xl">{message || '로딩중입니다.'}</p>
                </div>
            </div>
        );
    }
};

export default Loading;
