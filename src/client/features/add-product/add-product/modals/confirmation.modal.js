import React from 'react';
import { Overlay } from 'react-native-elements';
import { TextLarge } from '../../../global.styles';
import { TextCenterContainer } from '../add-product.styles';

export const ConfirmationModal = ({ visible, name, list }) => {
  return (
    <Overlay isVisible={visible}>
      <TextCenterContainer>
        <TextLarge>Product: {name}</TextLarge>
        <TextLarge>Saved to: {list}</TextLarge>
      </TextCenterContainer>
    </Overlay>
  );
};
