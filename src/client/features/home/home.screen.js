import React from 'react';
import { SafeArea } from '../../components/utility/safe-area.component';

import { PageContainer, PageTitle } from '../global.styles';

export const Home = () => {
  return (
    <>
      <SafeArea>
        <PageContainer>
          <PageTitle>Home</PageTitle>
        </PageContainer>
      </SafeArea>
    </>
  );
};
