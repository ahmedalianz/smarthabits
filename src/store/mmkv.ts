import { mmkv } from '@/services/mmkv';
import { ThemeMode } from '@/theme';
import { StorageValue } from 'zustand/middleware';
import { PersistStorage } from 'zustand/middleware';

type ZustandPersistedValue = { theme: ThemeMode };

export const ZustandMMKVStorage: PersistStorage<ZustandPersistedValue> = {
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    if (!value) return null;
    return JSON.parse(value) as StorageValue<ZustandPersistedValue>;
  },
  setItem: (key: string, value: StorageValue<ZustandPersistedValue>) => {
    mmkv.set(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    mmkv.remove(key);
  },
};
