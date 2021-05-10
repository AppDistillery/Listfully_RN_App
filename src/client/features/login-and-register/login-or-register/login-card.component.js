import React, { useState, useContext, useEffect } from 'react';
import { Input, Icon } from 'react-native-elements';
import { InputContainer } from './login-register.styles';
import { Btn, BtnDisabled, BtnText, ErrorText } from '../../global.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const LoginCard = () => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [toggleAvtiveSaveBtn, setToggleAvtiveSaveBtn] = useState(true);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  useEffect(() => {
    const activeSaveItemBtn = () => {
      if (
        email !== null &&
        email.length !== 0 &&
        password !== null &&
        password.length !== 0
      ) {
        setToggleAvtiveSaveBtn(false);
      } else {
        setToggleAvtiveSaveBtn(true);
      }
    };
    activeSaveItemBtn();
  }, [email, password]);

  return (
    <>
      <InputContainer>
        <Input
          placeholder='Enter your email'
          leftIcon={<Icon name='email' type='material-community' size={25} />}
          onChangeText={onChangeEmail}
        />
        <Input
          placeholder='Enter password'
          leftIcon={<Icon name='lock' type='material-community' size={25} />}
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
      </InputContainer>
      {!toggleAvtiveSaveBtn ? (
        <Btn onPress={() => onLogin(email, password)}>
          <Icon
            name='sign-in-alt'
            type='font-awesome-5'
            size={20}
            color='#FAFAFC'
          />
          <BtnText>Login</BtnText>
        </Btn>
      ) : (
        <BtnDisabled>
          <Icon
            name='sign-in-alt'
            type='font-awesome-5'
            size={20}
            color='#FAFAFC'
          />
          <BtnText>Login</BtnText>
        </BtnDisabled>
      )}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </>
  );
};
