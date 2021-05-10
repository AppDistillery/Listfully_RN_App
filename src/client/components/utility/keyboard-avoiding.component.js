import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const KeyboardAvoid = ({ children }) => {
  return (
    <KeyboardAvoidingContainer
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {children}
    </KeyboardAvoidingContainer>
  );
};
