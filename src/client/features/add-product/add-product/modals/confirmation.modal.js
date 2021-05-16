import React from 'react';
import { Overlay } from 'react-native-elements';
import { Btn, BtnText, TextLarge } from '../../../global.styles';
import {
  ProfileFieldContent,
  ProfileFieldContentText,
  ProfileFieldName,
  ProfileFieldNameText,
  ProfileInfoContainer
} from '../../../menu/profile/profile.styles';
import { TextCenterContainer } from '../add-product.styles';

export const ConfirmationModal = ({
  visible,
  name,
  list,
  resetAndRedirect
}) => {
  return (
    <Overlay isVisible={visible}>
      <TextCenterContainer>
        <TextLarge>Product saved to list</TextLarge>
        <ProfileInfoContainer>
          <ProfileFieldName>
            <ProfileFieldNameText>Product:</ProfileFieldNameText>
          </ProfileFieldName>
          <ProfileFieldContent>
            <ProfileFieldContentText>{' ' + name}</ProfileFieldContentText>
          </ProfileFieldContent>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <ProfileFieldName>
            <ProfileFieldNameText>List:</ProfileFieldNameText>
          </ProfileFieldName>
          <ProfileFieldContent>
            <ProfileFieldContentText>{' ' + list}</ProfileFieldContentText>
          </ProfileFieldContent>
        </ProfileInfoContainer>
        <Btn onPress={() => resetAndRedirect()}>
          <BtnText>OK</BtnText>
        </Btn>
      </TextCenterContainer>
    </Overlay>
  );
};
