import { Image, Text, View, Dimensions, Pressable } from 'react-native';
import styled from 'styled-components/native';

const cardSize = Math.floor(Dimensions.get('window').width / 2);

// export const Name = styled()``;

export const ListsCard = styled(View)`
  flex: 1;
  margin: 6px;
  height: ${cardSize - 30}px;
  max-width: ${cardSize - 12}px;
  background-color: ${({ theme }) => theme.colors.linen};
`;

export const MenuPressable = styled(Pressable)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ListMenuLock = styled(View)`
  align-self: flex-start;
  padding-top: 7px;
  padding-left: 7px;
`;

export const ListMenuIcon = styled(View)`
  flex: 1;
  padding-right: 27px;
`;

export const NavToItemsPressable = styled(Pressable)`
  flex: 4;
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

// List menu styling

export const ListMenuHeaderText = styled(Text)`
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.stoneGray};
`;

export const ListMenuIcons = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const ListMenuText = styled(Text)`
  flex: 5;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;
