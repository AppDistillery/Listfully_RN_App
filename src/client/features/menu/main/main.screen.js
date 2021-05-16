import React, { useContext } from 'react';
import { Icon } from 'react-native-elements';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { PageContainer, PageTitle, Btn, BtnText } from '../../global.styles';

export const Menu = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <>
      <PageContainer>
        <PageTitle>Menu</PageTitle>
        <Btn onPress={() => navigation.navigate('Profile')}>
          <Icon
            name='account'
            type='material-community'
            size={20}
            color='#FAFAFC'
          />
          <BtnText>Profile</BtnText>
        </Btn>
        {/* <Btn onPress={() => navigation.navigate('Settings')}>
          <Icon name='settings' type='material' size={20} color='#FAFAFC' />
          <BtnText>Settings</BtnText>
        </Btn>
        <Btn onPress={() => navigation.navigate('Events')}>
          <Icon name='event' type='material' size={20} color='#FAFAFC' />
          <BtnText>Events</BtnText>
        </Btn>
        <Btn onPress={() => navigation.navigate('Share Cost')}>
          <Icon name='slideshare' type='entypo' size={20} color='#FAFAFC' />
          <BtnText>Share cost</BtnText>
        </Btn>
        <Btn onPress={() => navigation.navigate('Secret Santa')}>
          <Icon
            name='user-secret'
            type='font-awesome-5'
            size={20}
            color='#FAFAFC'
          />
          <BtnText>Secret Santa</BtnText>
        </Btn> */}
        <Btn
          onPress={() => {
            onLogout();
          }}
        >
          <Icon
            name='sign-out-alt'
            type='font-awesome-5'
            size={20}
            color='#FAFAFC'
          />
          <BtnText>Logout</BtnText>
        </Btn>
      </PageContainer>
    </>
  );
};
