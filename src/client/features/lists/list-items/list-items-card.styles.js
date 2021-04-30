import { Image, Text, View, Pressable } from 'react-native';
import styled from 'styled-components/native';

export const ItemCard = styled(View)`
  flex-direction: row;
  margin: 3px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.linen40};
`;

export const NavToDetailsPressable = styled(Pressable)`
  flex-direction: row;
  flex: 7;
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
  padding-left: 10px;
`;

export const InfoTitleContainer = styled(View)`
  flex: 3;
  justify-content: center;
`;

export const InfoPriceContainer = styled(View)`
  flex: 2;
  justify-content: flex-start;
`;

export const InfoQuantityContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const TextLarge = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const TextSmall = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const ItemMenuContainer = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: space-evenly;
`;

export const ItemMenuLinks = styled(Pressable)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const ItemMenuLinksText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.links};
  color: ${({ theme }) => theme.colors.charcoal};
`;
