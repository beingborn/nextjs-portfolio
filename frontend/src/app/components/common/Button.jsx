import { cn } from '@/lib/utils';

const Button = ({ children, disabled = false, fullWidth = false, ...rest }) => {
    return (
        <button
            {...rest}
            className={cn(
                'px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-2xl',
                fullWidth && 'w-full',
                disabled && 'bg-gray-300',
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
