import React from 'react';
import { render } from '@testing-library/react-native';
import useAppTheme from '@/hooks/useAppTheme';
import RootNavigator from '@/navigation/RootNavigator';

jest.mock('@/hooks/useAppTheme');

describe('RootNavigator', () => {
  it('uses dark theme and light-content status bar', () => {
    (useAppTheme as jest.Mock).mockReturnValue({
      name: 'dark',
      theme: {
        colors: {
          primary: '#000',
          background: '#111',
          card: '#222',
          text: '#fff',
          border: '#333',
        },
      },
    });

    const { getByTestId } = render(<RootNavigator />);

    expect(getByTestId('navigation-container')).toBeTruthy();
    expect(getByTestId('Tab-HabitsStack')).toBeTruthy();
    expect(getByTestId('Tab-SettingsStack')).toBeTruthy();
  });

  it('uses light theme', () => {
    (useAppTheme as jest.Mock).mockReturnValue({
      name: 'light',
      theme: {
        colors: {
          primary: '#fff',
          background: '#eee',
          card: '#ddd',
          text: '#000',
          border: '#ccc',
        },
      },
    });

    const { getByTestId } = render(<RootNavigator />);
    expect(getByTestId('navigation-container')).toBeTruthy();
    expect(getByTestId('Tab-HabitsStack')).toBeTruthy();
    expect(getByTestId('Tab-SettingsStack')).toBeTruthy();
  });
});
