import { create } from 'zustand';

interface SidebarState {
    expanded: boolean;
    toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
    expanded: true,

    toggleSidebar: () => set((state) => ({ expanded: !state.expanded })),
}));

export default useSidebarStore;
