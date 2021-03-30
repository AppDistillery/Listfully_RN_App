import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Home } from '../../features/home/home.screen';
import { AddProduct } from '../../features/addProduct/addProduct.screen';
import { Search } from '../../features/search/search.screen';
import { Lists } from '../../features/lists/lists.screen';
import { Menu } from '../../features/menu/menu.modal';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
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
      <Tab.Screen name='Lists' component={Lists} />
      <Tab.Screen name='Add' component={AddProduct} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Menu' component={Menu} />
    </Tab.Navigator>
  );
};
