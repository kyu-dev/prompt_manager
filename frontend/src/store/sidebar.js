import { create } from 'zustand';

export const useSidebarStore = create((set) => ({
  isOpen: true, // état initial
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));