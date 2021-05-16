import React, { useContext, useEffect, useState } from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { BackBtn } from '../../../components/utility/back-btn.component';
import { Avatar } from 'react-native-elements';
import { colors } from '../../../infrastructure/theme/colors';

import { PageContainer, PageTitle, TextLarge } from '../../global.styles';
import {
  ProfileInfoContainer,
  SpacerProfile20,
  SpacerProfile30,
  ProfileFieldName,
  ProfileFieldContent,
  ProfileFieldNameText,
  ProfileFieldContentText
} from './profile.styles';

export const Profile = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    const checkIfUserHasPhoto = () => {
      if (user.profile.image.length !== 0) {
        setUserPhoto(user.profile.image);
      }
    };
    checkIfUserHasPhoto();
  }, []);

  return (
    <SafeArea>
      <BackBtn navigate={navigation} />
      <PageContainer>
        {userPhoto !== null ? (
          <Avatar
            size='xlarge'
            rounded
            source={{
              uri: userPhoto
            }}
          />
        ) : (
          <Avatar
            size='xlarge'
            rounded
            title={user.first_name}
            containerStyle={{ backgroundColor: colors.charcoal }}
          />
        )}
        <SpacerProfile20 />
        <PageTitle>Hello, {user.first_name}</PageTitle>
        <SpacerProfile30 />
        <TextLarge>User information</TextLarge>
        <ProfileInfoContainer>
          <ProfileFieldName>
            <ProfileFieldNameText>Name: </ProfileFieldNameText>
          </ProfileFieldName>
          <ProfileFieldContent>
            <ProfileFieldContentText>
              {' ' + user.profile.name}
            </ProfileFieldContentText>
          </ProfileFieldContent>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <ProfileFieldName>
            <ProfileFieldNameText>Email: </ProfileFieldNameText>
          </ProfileFieldName>
          <ProfileFieldContent>
            <ProfileFieldContentText>
              {' ' + user.email}
            </ProfileFieldContentText>
          </ProfileFieldContent>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <ProfileFieldName>
            <ProfileFieldNameText>Date of birth: </ProfileFieldNameText>
          </ProfileFieldName>
          <ProfileFieldContent>
            <ProfileFieldContentText>
              {' ' + user.profile.birth_date}
            </ProfileFieldContentText>
          </ProfileFieldContent>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <ProfileFieldName>
            <ProfileFieldNameText>Your lists: </ProfileFieldNameText>
          </ProfileFieldName>
          <ProfileFieldContent>
            <ProfileFieldContentText> 5</ProfileFieldContentText>
          </ProfileFieldContent>
        </ProfileInfoContainer>
      </PageContainer>
    </SafeArea>
  );
};
