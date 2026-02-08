import React from 'react';

/**
 * IconButton 컴포넌트
 *
 * Props:
 * - icon: 아이콘 컴포넌트 (React 컴포넌트)
 * - iconPosition: 아이콘 위치 ('left' | 'right') - 기본값: 'left'
 * - children: 버튼 텍스트
 * - ...rest: button 요소의 모든 속성 (onClick, disabled, type 등)
 */

const IconButton = ({ icon, iconPosition = 'left', children, className = '', ...rest }) => {
    const baseClasses =
        'px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-2xl flex items-center gap-2 hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const iconElement =
        icon &&
        React.cloneElement(icon, {
            size: 16,
            className: 'flex-shrink-0',
        });

    return (
        <button {...rest} className={`${baseClasses} ${className}`}>
            {iconPosition === 'left' && iconElement}
            {children && <span>{children}</span>}
            {iconPosition === 'right' && iconElement}
        </button>
    );
};

export default IconButton;
