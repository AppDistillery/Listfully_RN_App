import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { BackBtn } from '../../../components/utility/back-btn.component';

import {
  AddImageContainer,
  AddProductImage,
  AddProductInputContainer,
  PriceAndQuantityContainer,
  PriceTextInput,
  QuantityTextInput,
  SaveBtnContainer
} from './add-product.styles';
import {
  Btn,
  BtnText,
  KeyboardAvoidingContainer,
  PageContainer,
  SpacerFlex1,
  TextInputWide
} from '../../global.styles';

export const AddProduct = ({ navigation }) => {
  return (
    <KeyboardAvoidingContainer
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeArea>
        <BackBtn navigate={navigation} />
        <PageContainer>
          <AddImageContainer>
            <AddProductImage
              source={require('../../../../../assets/placeholder-image.png')}
            />
          </AddImageContainer>
          <AddProductInputContainer>
            <TextInputWide placeholder='Title' />
            <TextInputWide placeholder='Link' />
            <TextInputWide placeholder='List' />
            <PriceAndQuantityContainer>
              <PriceTextInput placeholder='Price' />
              <SpacerFlex1 />
              <QuantityTextInput placeholder='Quantity' />
            </PriceAndQuantityContainer>
            <TextInputWide placeholder='Description' multilines />
          </AddProductInputContainer>
          <SaveBtnContainer>
            <Btn>
              <Icon name='save-alt' type='material' size={20} color='#FAFAFC' />
              <BtnText>SAVE</BtnText>
            </Btn>
          </SaveBtnContainer>
        </PageContainer>
      </SafeArea>
    </KeyboardAvoidingContainer>
  );
};
