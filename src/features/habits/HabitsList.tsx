import useAppTheme from '@/hooks/useAppTheme';
import React from 'react';
import { Text, View } from 'react-native';

const HabitsList = () => {
  const { theme } = useAppTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Home</Text>
    </View>
  );
};

export default HabitsList;
