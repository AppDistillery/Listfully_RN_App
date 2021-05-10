import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const SwitchCardText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.charcoal};
  text-decoration: underline;
`;

export const InputContainer = styled(View)`
  width: 75%;
`;

export const Spacer10 = styled(View)`
  height: 10px;
`;

export const Spacer15 = styled(View)`
  height: 15px;
`;
