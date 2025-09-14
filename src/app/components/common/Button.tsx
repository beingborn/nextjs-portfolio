import React from 'react';

// <button> 요소가 기본적으로 제공하는 모든 속성(onClick, disabled, type 등) 제공
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className="px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-2xl">
            {children}
        </button>
    );
};

export default Button;
