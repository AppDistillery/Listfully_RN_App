import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const ItemCard = styled(View)`
  flex-direction: row;
  margin: 3px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.linen40};
`;

export const ImageContainer = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100%;
`;

export const Images = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const ItemInfoContainer = styled(View)`
  flex: 3;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 10px;
  width: 100%;
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const LinkText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const Price = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const Quantity = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const ItemMenuContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
