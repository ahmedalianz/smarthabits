import { ThemeMode } from '@/theme';
import { StateCreator } from 'zustand';

export type ThemeSlice = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};
export const createThemeSlice: StateCreator<
  ThemeSlice,
  [['zustand/immer', never]],
  [],
  ThemeSlice
> = (set: any) => ({
  theme: 'light',
  setTheme: (theme: ThemeMode) => set({ theme }),
});
