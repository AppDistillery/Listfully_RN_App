import React, { useContext } from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { BackBtn } from '../../../components/utility/back-btn.component';

import {
  PageContainer,
  PageTitle,
  TextLarge,
  TextMedium
} from '../../global.styles';
import { ProfileInfoContainer } from './profile.styles';

export const Profile = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <BackBtn navigate={navigation} />
      <PageContainer>
        <PageTitle>Hello, {user.first_name}</PageTitle>
        <TextLarge>User information</TextLarge>
        <ProfileInfoContainer>
          <TextMedium>Name: </TextMedium>
          <TextMedium>{user.profile.name}</TextMedium>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <TextMedium>Email: </TextMedium>
          <TextMedium>{user.email}</TextMedium>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <TextMedium>Date of birth: </TextMedium>
          <TextMedium>{user.profile.birth_date}</TextMedium>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <TextMedium>Number of lists: </TextMedium>
          <TextMedium>5</TextMedium>
        </ProfileInfoContainer>
      </PageContainer>
    </SafeArea>
  );
};
