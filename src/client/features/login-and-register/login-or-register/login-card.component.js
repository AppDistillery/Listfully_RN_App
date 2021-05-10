import React, { useContext } from 'react';
import { Input, Icon } from 'react-native-elements';
import { InputContainer } from './login-register.styles';
import { Btn, BtnText } from '../../global.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const LoginCard = () => {
  const { onLoginAndLogout } = useContext(AuthenticationContext);

  return (
    <>
      <InputContainer>
        <Input
          placeholder='Enter your email'
          leftIcon={<Icon name='email' type='material-community' size={25} />}
        />
        <Input
          placeholder='Enter password'
          leftIcon={<Icon name='lock' type='material-community' size={25} />}
          secureTextEntry={true}
        />
      </InputContainer>
      <Btn onPress={() => onLoginAndLogout()}>
        <Icon
          name='sign-in-alt'
          type='font-awesome-5'
          size={20}
          color='#FAFAFC'
        />
        <BtnText>Login</BtnText>
      </Btn>
    </>
  );
};
