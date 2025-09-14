import React, { ChangeEvent } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password';
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', value, onChange, className, ...rest }: InputProps) => {
    return (
        <input
            className={`p-2 border border-zinc-600 ${className}`}
            type={type}
            value={value}
            onChange={onChange}
            {...rest}
        />
    );
};

export default Input;
