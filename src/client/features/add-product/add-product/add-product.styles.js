import { View, Image, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const AddImageContainer = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100%;
`;

export const AddProductImage = styled(Image)`
  width: 75%;
  height: 100%;
`;

export const AddProductInputContainer = styled(View)`
  flex: 5;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const PriceTextInput = styled(TextInput)`
  flex: 2;
  border-bottom-width: 1px;
`;

export const QuantityTextInput = styled(TextInput)`
  flex: 1;
  border-bottom-width: 1px;
`;

export const PriceAndQuantityContainer = styled(View)`
  width: 75%;
  flex-direction: row;
`;

export const SaveBtnContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
