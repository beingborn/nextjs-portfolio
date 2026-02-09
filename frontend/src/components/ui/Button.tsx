import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

/* 
    TODO
    필요 속성 정의 
*/

const buttonVariants = cva('');

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'contained' | 'outline';
    color?: 'primary' | 'secondary';
}

const Button = ({
    children,
    fullWidth = false,
    loading = false,
    // size = 'md',
    className,
    ...rest
}: ButtonProps) => {
    return (
        <button
            disabled={loading}
            className={`
                    px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-2xl
                    ${fullWidth && 'w-full'}
                    ${className || ''}
                `}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
