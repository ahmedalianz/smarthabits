import { create } from 'zustand';
import { createThemeSlice, ThemeSlice } from './slices/themeSlice';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ZustandMMKVStorage } from './mmkv';
import { AuthState, createAuthSlice } from './slices/authSlice';

export type AppStore = ThemeSlice & AuthState;
export const useAppStore = create<AppStore>()(
  devtools(
    immer(
      persist(
        (...args) => ({
          ...createThemeSlice(...args),
          ...createAuthSlice(...args),
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
