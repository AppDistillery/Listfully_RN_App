import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Home } from '../../features/home/home.screen';
import { ListsNavigator } from './lists.navigator';
import { LoginOrRegisterNavigator } from './login-register.navigator';
import { LoginOrRegister } from '../../features/login-and-register/login-or-register/login-or-register.screen';

const Tab = createBottomTabNavigator();

export const NoUserNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Lists') {
            iconName = focused ? 'list-sharp' : 'list-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: '#363743',
        inactiveTintColor: '#6E6F7C'
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Lists' component={ListsNavigator} />
      <Tab.Screen name='User' component={LoginOrRegister} />
    </Tab.Navigator>
  );
};
