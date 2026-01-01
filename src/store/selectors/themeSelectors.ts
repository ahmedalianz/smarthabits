import { AppStore, useAppStore } from '../index';

export const useTheme = () => useAppStore((state: AppStore) => state.theme);
export const useSetTheme = () =>
  useAppStore((state: AppStore) => state.setTheme);
