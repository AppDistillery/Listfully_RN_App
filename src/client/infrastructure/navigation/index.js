import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app.navigator';
import { NoUserNavigator } from './no-user.navigator';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Navigation = () => {
  const { user, isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <NoUserNavigator />}
    </NavigationContainer>
  );
};
