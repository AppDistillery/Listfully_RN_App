import React from 'react';
import { Icon } from 'react-native-elements';

import { PageContainer, PageTitle, Btn, BtnText } from '../../global.styles';

export const AddMenu = ({ navigation }) => {
  return (
    <>
      <PageContainer>
        <PageTitle>Add product</PageTitle>
        <Btn onPress={() => navigation.navigate('Add Product')}>
          <Icon name='camera' type='font-awesome' size={20} color='#FAFAFC' />
          <BtnText>Camera</BtnText>
        </Btn>
        <Btn onPress={() => console.log('Pressen')}>
          <Icon
            name='barcode-scan'
            type='material-community'
            size={20}
            color='#FAFAFC'
          />
          <BtnText>Barcode</BtnText>
        </Btn>
        <Btn onPress={() => console.log('Pressen')}>
          <Icon name='link' type='entypo' size={20} color='#FAFAFC' />
          <BtnText>Link</BtnText>
        </Btn>
      </PageContainer>
    </>
  );
};
