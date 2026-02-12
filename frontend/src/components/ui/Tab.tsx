'use client';

/*
import { cva } from 'class-variance-authority';
*/
import { createContext } from 'react';

/* 
    리팩토링 포인트 :

    1. Context는 괜찮은 상태임
    2. CVA가 혼재되어 있어서 아쉬움
*/

/* 
    1. 탭 기본 Context Type 정의 
    2. 탭 프로바이더로 탭 콘텍스트 정의 및 전달 
    3. 탭 Provider 전달

    탭 전역 타입
    - 기본 활성화 탭
    - 변형 타입 
    - 활성화 탭 
*/

/* 
    탭 콘텍스트 타입과 탭프로바이더의 값을 따로 두는 이유는? 

    콘텍스트 : 콘텍스트에 저장될 값
    탭프로바이더 : 유저에게 직접 입력받는 Prop의 타입
*/

export type TabVariant = 'text' | 'line' | 'contained';

interface TabContextType {
    activeTab: string;
    defaultActiveTab: string;
    variant: TabVariant;
    setActiveTab: (tab: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderType {
    children?: React.ReactNode;
    variant: TabVariant;
    defaultActiveTab: string;
}

export const TabProvider = ({ children, variant, defaultActiveTab }: TabProviderType) => {
    return <TabContext.Provider>{children}</TabContext.Provider>;
};

// interface TabContextType {
//     defaultValue?: string;
//     variant?: 'primary' | 'secondary';
//     handleSelect: (value: string) => void;
// }

// const TabContext = createContext<TabContextType | null>(null);

// export const Tab = ({ children, defaultValue, variant = 'primary' }) => {
//     const [selectedValue, setSelectedValue] = useState(defaultValue);

//     function handleSelect(value) {
//         setSelectedValue(value);
//     }

//     return (
//         <TabContext.Provider value={{ selectedValue, handleSelect, variant }}>
//             {children}
//         </TabContext.Provider>
//     );
// };

// const useTabContext = () => {
//     const context = useContext(TabContext);

//     if (!context) {
//         throw new Error('Tab Context Not Valid');
//     }

//     return context;
// };

// function TabList({ children, className }) {
//     const { variant } = useTabContext();

//     const variantStyles = {
//         primary: 'flex items-center gap-2',
//         outline: 'flex items-center gap-4',
//     };

//     return (
//         <div id="tab-list" className={cn(variantStyles[variant], className)}>
//             {children}
//         </div>
//     );
// }

// function TabButton({ children, className, value }) {
//     const { handleSelect, selectedValue, variant } = useTabContext();
//     const isActive = selectedValue == value;

//     const variantStyles = cva(
//         // 기본 공통 적용
//         `p-2 cursor-pointer rounded-sm flex justify-center items-center border ${className}`,
//         {
//             variants: {
//                 variant: {
//                     primary: 'border-border-pri bg-gray-100',
//                     outline: 'border-border-pri sec bg-white',
//                 },
//                 active: {
//                     true: '',
//                     false: '',
//                 },
//             },
//             compoundVariants: [
//                 {
//                     variant: 'primary',
//                     active: true,
//                     class: 'bg-pri text-white',
//                 },
//                 {
//                     variant: 'outline',
//                     active: true,
//                     class: 'font-bold border-border-pri',
//                 },
//             ],
//             defaultVariants: {
//                 active: false,
//             },
//         },
//     );

//     const tabClasses = variantStyles({ variant: variant, active: isActive });

//     return (
//         <div id="tab-button" className={tabClasses} onClick={() => handleSelect(value)}>
//             {children}
//         </div>
//     );
// }

// function TabContent({ children }) {
//     return <div id="tab-content">{children}</div>;
// }

// function TabPanel({ children, className, value }) {
//     const { selectedValue } = useTabContext();

//     return (
//         <>
//             {value === selectedValue && (
//                 <div id="tab-panel" className={className}>
//                     {children}
//                 </div>
//             )}
//         </>
//     );
// }

// export { Tab, TabButton, TabContent, TabList, TabPanel };
