import React, { useContext } from 'react';
import { SafeArea } from '../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

import { Btn, BtnText, PageContainer, TextLarge } from '../global.styles';
import { Spacer15 } from '../login-and-register/login-or-register/login-register.styles';
import {
  HomeContentContainer,
  HomePageTitle,
  HomePageTitleContainer,
  TopTextContainer,
  TextMediumHome
} from './home.styles';

export const Home = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  return (
    <>
      <SafeArea>
        <PageContainer>
          <HomePageTitleContainer>
            <HomePageTitle>LISTFULLY.</HomePageTitle>
          </HomePageTitleContainer>
          <TopTextContainer>
            <TextLarge>Save items to come back to later</TextLarge>
            <Spacer15 />
            <TextMediumHome>
              Browsing online, but not ready to buy? Skip using a shopping cart
              to set aside items, or taking screenshots that get lost in your
              phone. Save things you like to Listfully as a reminder for later,
              or organize them into wishlists to share them with others.
            </TextMediumHome>
          </TopTextContainer>
          <HomeContentContainer>
            {!user && (
              <Btn onPress={() => navigation.navigate('User')}>
                <BtnText>START LISTING</BtnText>
              </Btn>
            )}
          </HomeContentContainer>
        </PageContainer>
      </SafeArea>
    </>
  );
};
