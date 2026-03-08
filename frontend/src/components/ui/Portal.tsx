import { createPortal } from 'react-dom';

export default function Portal({ children }: { children: React.ReactNode }) {
    const element = typeof window !== 'undefined' && document.querySelector('#portal');

    return element && children ? createPortal(children, element) : null;
}
