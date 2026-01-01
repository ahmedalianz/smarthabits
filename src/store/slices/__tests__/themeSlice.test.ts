import { useAppStore } from '@/store';
import { act, renderHook } from '@testing-library/react-native';

describe('themeSlice', () => {
  beforeEach(() => {
    useAppStore.setState({ theme: 'light' });
  });
  it('should render default theme as light', () => {
    const { result } = renderHook(() => useAppStore());
    expect(result.current.theme).toBe('light');
  });

  it('should set theme', () => {
    const { result } = renderHook(() => useAppStore());
    act(() => result.current.setTheme('dark'));
    expect(result.current.theme).toBe('dark');
  });

  it('should set theme to system', () => {
    const { result } = renderHook(() => useAppStore());
    act(() => result.current.setTheme('system'));
    expect(result.current.theme).toBe('system');
  });
});
