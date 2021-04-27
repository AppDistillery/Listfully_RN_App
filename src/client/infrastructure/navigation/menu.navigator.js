import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu } from '../../features/menu/main/main.screen';
import { Profile } from '../../features/menu/profile/profile.screen';
import { Settings } from '../../features/menu/settings/settings.screen';
import { Events } from '../../features/menu/events/events.screen';
import { ShareCost } from '../../features/menu/share-cost/share-cost.screen';
import { SecretSanta } from '../../features/menu/secret-santa/secret-santa.screen';

const MenuStack = createStackNavigator();

export const MenuNavigator = () => {
  return (
    <MenuStack.Navigator headerMode='none'>
      <MenuStack.Screen name='Menu' component={Menu} />
      <MenuStack.Screen name='Profile' component={Profile} />
      <MenuStack.Screen name='Settings' component={Settings} />
      <MenuStack.Screen name='Events' component={Events} />
      <MenuStack.Screen name='Share Cost' component={ShareCost} />
      <MenuStack.Screen name='Secret Santa' component={SecretSanta} />
    </MenuStack.Navigator>
  );
};
