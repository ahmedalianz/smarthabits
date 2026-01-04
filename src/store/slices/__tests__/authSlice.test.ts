import { useAppStore } from '@/store';
import { act, renderHook } from '@testing-library/react-native';
import {
  authCallback,
  mockUser,
} from '../../../../__mocks__/@react-native-firebase/auth'; //absolute import will fail as it feels invisible to this file

describe('authSlice', () => {
  beforeEach(() => {
    act(() => useAppStore.setState({ user: null, isLoading: true }));
    jest.clearAllMocks();
  });
  it('loading should be true / user should be null before initialization', () => {
    const { result } = renderHook(() => useAppStore());
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.user).toBe(null);
  });
  it('should set user after initialization', () => {
    const { result } = renderHook(() => useAppStore());
    act(() => {
      result.current.initialize();
      authCallback(mockUser);
    });
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.user).toBe(mockUser);
  });
  it('should sign out', async () => {
    const { result } = renderHook(() => useAppStore());
    act(() => {
      result.current.initialize();
      authCallback(mockUser);
    });
    await act(async () => {
      await result.current.signOut();
      authCallback(null);
    });
    act(() => {
      authCallback(null);
    });
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.user).toBe(null);
  });
});
