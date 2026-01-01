import useAppTheme from '@/hooks/useAppTheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import HabitsStack from './HabitsStack';
import SettingsStack from './SettingsStack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const { name: themeName, theme } = useAppTheme();
  const navigationTheme = {
    ...(themeName === 'dark' ? DarkTheme : DefaultTheme),
    colors: {
      ...(themeName === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.card,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.primary,
    },
  };
  return (
    <>
      <StatusBar
        barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <NavigationContainer theme={navigationTheme}>
        <Tab.Navigator>
          <Tab.Screen name="HabitsStack" component={HabitsStack} />
          <Tab.Screen name="SettingsStack" component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
