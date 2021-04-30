import { Image, Text, View } from 'react-native';
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

export const DetailIconContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const DetailsInfoContainer = styled(View)`
  flex: 4;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 10px;
  width: 100%;
`;

export const DetailsInfoTextContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const DetailsInfoTextPressable = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const DetailsText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;
