import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListsScreen } from '../../features/lists/screens/lists/lists.screen';
import { ListItemsScreen } from '../../features/lists/screens/list-items/list-items.screen';

const ListsStack = createStackNavigator();

export const ListsNavigator = () => {
  return (
    <ListsStack.Navigator>
      <ListsStack.Screen name='Lists' component={ListsScreen} />
      <ListsStack.Screen name='List-items' component={ListItemsScreen} />
    </ListsStack.Navigator>
  );
};
