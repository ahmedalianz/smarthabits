import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '@/features/auth/Login';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
