import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Home } from '../../features/home/home.screen';
import { Search } from '../../features/search/search.screen';
import { ListsNavigator } from './lists.navigator';
import { MenuNavigator } from './menu.navigator';
import { AddProductNavigator } from './add-product.navigator';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Lists'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Lists') {
            iconName = focused ? 'list-sharp' : 'list-outline';
          } else if (route.name === 'Add') {
            iconName = 'ios-add-circle-sharp';
            size = 35;
            color = '#A05E38';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search-sharp' : 'ios-search-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'ios-menu-sharp' : 'ios-menu-outline';
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
      <Tab.Screen name='Add' component={AddProductNavigator} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Menu' component={MenuNavigator} />
    </Tab.Navigator>
  );
};
