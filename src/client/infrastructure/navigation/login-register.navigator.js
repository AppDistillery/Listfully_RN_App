import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginOrRegister } from '../../features/login-and-register/login-or-register/login-or-register.screen';

const MenuStack = createStackNavigator();

export const LoginOrRegisterNavigator = () => {
  return (
    <MenuStack.Navigator headerMode='none'>
      <MenuStack.Screen name='login-or-register' component={LoginOrRegister} />
    </MenuStack.Navigator>
  );
};
