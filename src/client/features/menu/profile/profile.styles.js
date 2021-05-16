import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const ProfileInfoContainer = styled(View)`
  flex-direction: row;
  width: 75%;
  height: 40px;
  margin: 5px 0;
  align-items: flex-end;
`;

export const ProfileFieldName = styled(View)`
  flex-shrink: 1;
`;

export const ProfileFieldNameText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const ProfileFieldContent = styled(View)`
  flex: 2;
`;

export const ProfileFieldContentText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const SpacerProfile20 = styled(View)`
  height: 20px;
`;

export const SpacerProfile30 = styled(View)`
  height: 30px;
`;
