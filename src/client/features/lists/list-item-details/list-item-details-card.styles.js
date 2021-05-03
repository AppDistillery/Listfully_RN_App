import { Image, Text, View, Pressable } from 'react-native';
import styled from 'styled-components/native';

export const DetailsCard = styled(View)`
  flex: 1;
  margin: 3px;
  background-color: ${({ theme }) => theme.colors.linen40};
`;

export const DetailsImageContainer = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100%;
`;

export const DetailsImage = styled(Image)`
  width: 75%;
  height: 100%;
`;

export const DetailMenuContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DetailsMenuLinks = styled(Pressable)`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const DetailsInfoContainer = styled(View)`
  flex: 4;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 10px;
  width: 100%;
`;

export const DetailsInfoTextContainerLarge = styled(View)`
  flex: 2;
  justify-content: flex-start;
`;

export const DetailsInfoTextContainerMedium = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const DetailsInfoTextContainerSmall = styled(View)`
  flex: 0.5;
  justify-content: center;
`;
