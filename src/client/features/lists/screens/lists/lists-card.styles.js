import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const ListsCard = styled(View)`
  margin: 3px;
  height: 175px;
  background-color: ${({ theme }) => theme.colors.linen40};
  overflow: hidden;
`;
