import React, { useContext } from 'react';
import { Input, Icon } from 'react-native-elements';
import { InputContainer } from './login-register.styles';
import { Btn, BtnDisabled, BtnText } from '../../global.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const RegisterCard = () => {
  return (
    <>
      <InputContainer>
        <Input
          placeholder='Enter your email'
          leftIcon={<Icon name='email' type='material-community' size={25} />}
        />
        <Input
          placeholder='Your full name'
          leftIcon={<Icon name='person' type='material' size={25} />}
        />
        <Input
          placeholder='Choose password'
          leftIcon={<Icon name='lock' type='material-community' size={25} />}
          secureTextEntry={true}
        />
        <Input
          placeholder='Re-enter password'
          leftIcon={<Icon name='lock' type='material-community' size={25} />}
          secureTextEntry={true}
        />
      </InputContainer>
      <BtnDisabled onPress={() => console.log('Register')}>
        <Icon
          name='user-plus'
          type='font-awesome-5'
          size={20}
          color='#FAFAFC'
        />
        <BtnText>Register user</BtnText>
      </BtnDisabled>
    </>
  );
};
