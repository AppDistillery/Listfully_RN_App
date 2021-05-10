import { Text, View, Pressable, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Math.floor(Dimensions.get('window').width / 2);

export const PageContainer = styled(View)`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ListPagesContainer = styled(View)`
  flex: 1;
`;

export const FlexContainer = styled(View)`
  flex: 1;
`;

export const PageTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  align-self: center;
  padding: ${({ theme }) => theme.space[2]};
`;

export const Btn = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.charcoal};
  margin: 10px;
  height: 50px;
  width: 240px;
`;

export const BtnDisabled = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.steelGray};
  margin: 10px;
  height: 50px;
  width: 240px;
`;

export const BtnText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  align-self: center;
  margin-left: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.pearl};
`;

export const TextLarge = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const TextMedium = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const TextSmall = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.links};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const TextInputWide = styled(TextInput)`
  width: 75%;
  border-bottom-width: 1px;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const SpacerFlex05 = styled(View)`
  flex: 0.5;
`;

export const SpacerFlex1 = styled(View)`
  flex: 1;
`;

export const SpacerFlex2 = styled(View)`
  flex: 2;
`;

export const SpacerFlex3 = styled(View)`
  flex: 3;
`;
