import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HabitsStack from './HabitsStack';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HabitsStack" component={HabitsStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
};

export default AppStack;
