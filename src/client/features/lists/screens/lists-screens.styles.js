import { Text, View, Pressable } from 'react-native';
import styled from 'styled-components/native';

export const ListPagesContainer = styled(View)`
  padding: 10px;
  height: 100%;
`;

export const PageTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  align-self: center;
  padding: ${({ theme }) => theme.space[2]};
`;

export const ListContainer = styled(View)`
  flex: 1;
`;

export const StyledPressable = styled(Pressable)`
  flex: 1;
`;
