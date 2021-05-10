import React, { useContext } from 'react';
import { SafeArea } from '../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

import { Btn, BtnText, PageContainer, PageTitle } from '../global.styles';

export const Home = () => {
  const { user } = useContext(AuthenticationContext);
  return (
    <>
      <SafeArea>
        <PageContainer>
          <PageTitle>Home</PageTitle>
          <Btn onPress={() => console.log(user)}>
            <BtnText>Print user</BtnText>
          </Btn>
        </PageContainer>
      </SafeArea>
    </>
  );
};
