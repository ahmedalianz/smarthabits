import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { StateCreator } from 'zustand';
import { AppStore } from '..';

export type AuthState = {
  user: FirebaseAuthTypes.User | null;
  isLoading: boolean;
  initialize: () => () => void;
  signOut: () => Promise<void>;
};

export const createAuthSlice: StateCreator<
  AppStore,
  [['zustand/immer', never], ['zustand/persist', unknown]],
  [],
  AuthState
> = set => ({
  user: null,
  isLoading: true,
  initialize: () => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      set({ user, isLoading: false });
    });
    return unsubscribe;
  },
  signOut: async () => {
    await auth().signOut();
    set({ user: null, isLoading: false });
  },
});
