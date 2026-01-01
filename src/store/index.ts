import { create } from 'zustand';
import { createThemeSlice, ThemeSlice } from './slices/themeSlice';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ZustandMMKVStorage } from './mmkv';

export type AppStore = ThemeSlice;
export const useAppStore = create<AppStore>()(
  devtools(
    immer(
      persist(
        (...args) => ({
          ...createThemeSlice(...args),
        }),
        {
          name: 'app-storage',
          storage: ZustandMMKVStorage,
          partialize: state => ({ theme: state.theme }),
        },
      ),
    ),
  ),
);
