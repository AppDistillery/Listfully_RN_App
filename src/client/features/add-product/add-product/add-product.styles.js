import {
  View,
  Image,
  TextInput,
  Text,
  Pressable,
  FlatList
} from 'react-native';
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

export const SaveToListPicker = styled(Pressable)`
  width: 75%;
  border-bottom-width: 1px;
  justify-content: flex-end;
`;

export const SaveToListPickerText = styled(Text)`
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const PriceContainer = styled(View)`
  flex: 2.5;
  flex-direction: row;
  border-bottom-width: 1px;
`;

export const PriceTextInput = styled(TextInput)`
  flex: 2;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const CurrencyPicker = styled(Pressable)`
  flex: 1;
  justify-content: flex-end;
`;

export const CurrencyFlatlistContainer = styled(View)`
  height: 300px;
`;

export const SaveToListFlatlistContainer = styled(View)`
  height: 250px;
`;

export const CurrencyPickerText = styled(Text)`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const QuantityContainer = styled(View)`
  flex: 2.5;
  flex-direction: row;
  border-bottom-width: 1px;
`;

export const QuantityText = styled(Text)`
  flex: 2.4;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const QuantityTextInput = styled(TextInput)`
  flex: 0.6;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
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

export const TextCenterContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
