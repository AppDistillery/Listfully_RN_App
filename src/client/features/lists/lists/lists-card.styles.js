import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

// export const Name = styled()``;

export const ListsCard = styled(View)`
  margin: 3px;
  height: 175px;
  background-color: ${({ theme }) => theme.colors.linen40};
`;

export const MenuContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ListMenuLock = styled(View)`
  align-self: flex-start;
  padding-top: 5px;
  padding-left: 5px;
`;

export const ListMenuIcon = styled(View)`
  flex: 1;
  padding-right: 15px;
`;

export const ListNameContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImagesContainer = styled(View)`
  flex: 3;
  flex-direction: row;
  width: 100%;
`;

export const ImageView1 = styled(View)`
  flex: 1;
  padding: 2px;
`;

export const ImageView2 = styled(View)`
  flex: 1;
  padding: 2px;
`;

export const Images = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const CardBlank = styled(View)`
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin: 3px;
  height: 200px;
`;
