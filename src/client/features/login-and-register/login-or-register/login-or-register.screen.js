import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { LoginCard } from './login-card.component';
import { RegisterCard } from './register-card.component';

import { PageContainer, PageTitle } from '../../global.styles';
import { KeyboardAvoid } from '../../../components/utility/keyboard-avoiding.component';
import { SwitchCardText, Spacer15, Spacer10 } from './login-register.styles';

export const LoginOrRegister = () => {
  const [loginOrRegisterCard, setLoginOrRegisterCard] = useState(true);

  return (
    <KeyboardAvoid>
      <PageContainer>
        <PageTitle>{loginOrRegisterCard ? 'Login' : 'Register'}</PageTitle>
        <Spacer15 />
        {loginOrRegisterCard ? <LoginCard /> : <RegisterCard />}
        <Spacer10 />
        <Pressable onPress={() => setLoginOrRegisterCard(!loginOrRegisterCard)}>
          <SwitchCardText>
            {loginOrRegisterCard
              ? "Don't have a user? Register"
              : 'Already got a user? Login'}
          </SwitchCardText>
        </Pressable>
      </PageContainer>
    </KeyboardAvoid>
  );
};
