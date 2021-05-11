import { Text, View, Pressable, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const HomePageTitleContainer = styled(View)`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const HomePageTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.homeTitle};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  letter-spacing: 2px;
  align-self: center;
  padding: ${({ theme }) => theme.space[2]};
`;

export const TopTextContainer = styled(View)`
  flex: 1;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const TextMediumHome = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.charcoal};
  text-align: center;
`;

export const HomeContentContainer = styled(View)`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
