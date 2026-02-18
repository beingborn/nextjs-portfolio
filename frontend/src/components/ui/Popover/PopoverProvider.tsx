import { createContext, useState } from 'react';

/* 
    Popover Context 

*/
interface PopoverContextType {
    children?: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

/* 
    Popover Provider
*/
interface PopoverProviderType {
    children?: React.ReactNode;
    isOpen: boolean;
}

export const PopoverProvider = ({ children }: PopoverProviderType) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <PopoverContext.Provider value={{ isOpen: isOpen, open: handleOpen, close: handleClose }}>
            {children}
        </PopoverContext.Provider>
    );
};

/* 
    Popover Trigger 

    
*/

export const PopoverTrigger = () => {
    return <button></button>;
};

/* 
    Popover Content

    - isOpen = true일 시 display block 
    - Close 버튼 실행 
    - Absoulte 위치에 따라 토글 위치 변경
*/

export const PopoverContent = () => {
    return <div></div>;
};
