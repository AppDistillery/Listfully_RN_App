import React from 'react';
import { Pressable, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { PageTitle } from '../../features/global.styles';

const paddingRight = Math.floor(Dimensions.get('window').width / 5);

export const BackBtnContainer = styled(View)`
  flex: 0.1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackBtnRightSpace = styled(View)`
  flex: 4;
  align-items: center;
  justify-content: center;
  padding-right: ${paddingRight - 10}px;
`;

const BackBtnArrow = styled(Pressable)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackBtn = ({ navigate, name }) => {
  return (
    <BackBtnContainer>
      <BackBtnArrow onPress={() => navigate.goBack()}>
        <Icon name='arrow-back' type='material' size={35} color='#363743' />
      </BackBtnArrow>
      <BackBtnRightSpace>
        {name ? <PageTitle>{name}</PageTitle> : null}
      </BackBtnRightSpace>
    </BackBtnContainer>
  );
};

// Component needs to import { navigation }
// Then import and add:
// <BackBtn navigate={navigation} />
