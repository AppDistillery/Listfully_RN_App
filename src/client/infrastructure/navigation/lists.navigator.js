import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListsScreen } from '../../features/lists/lists/lists.screen';
import { ListItemsScreen } from '../../features/lists/list-items/list-items.screen';
import { ListItemDetailsScreen } from '../../features/lists/list-item-details/list-item-details.screen';

const ListsStack = createStackNavigator();

export const ListsNavigator = () => {
  return (
    <ListsStack.Navigator headerMode='none'>
      <ListsStack.Screen name='Lists' component={ListsScreen} />
      <ListsStack.Screen name='List items' component={ListItemsScreen} />
      <ListsStack.Screen
        name='List item details'
        component={ListItemDetailsScreen}
      />
    </ListsStack.Navigator>
  );
};
