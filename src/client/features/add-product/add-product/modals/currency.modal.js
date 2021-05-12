import React from 'react';
import { FlatList } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Btn, BtnText, TextLarge } from '../../../global.styles';
import {
  CurrencyFlatlistContainer,
  TextCenterContainer
} from '../add-product.styles';
import { CurrencyCheckbox } from './currency-checkbox.component';

export const CurrencyModal = ({
  visible,
  toggleVisible,
  data,
  currency,
  setCurrency
}) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={toggleVisible}>
      <TextCenterContainer>
        <TextLarge>Choose currency</TextLarge>
      </TextCenterContainer>
      <CurrencyFlatlistContainer>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <CurrencyCheckbox
                item={item}
                currency={currency}
                setCurrency={setCurrency}
              />
            );
          }}
          keyExtractor={(item) => item.code}
        />
      </CurrencyFlatlistContainer>
      <Btn onPress={() => toggleVisible()}>
        <BtnText>Save</BtnText>
      </Btn>
    </Overlay>
  );
};
