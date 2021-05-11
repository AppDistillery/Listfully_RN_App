import { Camera } from 'expo-camera';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const InnerSnap = styled(View)`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const StyledCamera = styled(Camera)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
