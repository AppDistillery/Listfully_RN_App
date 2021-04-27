import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const DetailsCard = styled(View)`
  margin: 3px;
  height: 100%;
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

export const DetailsTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const DetailsLinkText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.earth};
  text-decoration: underline;
`;

export const DetailsPrice = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const DetailsQuantity = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const DetailsComment = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;
