import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/client/infrastructure/theme';

import {
  useFonts as useOpenSans,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans';

import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { Navigation } from './src/client/infrastructure/navigation';

export default function App() {
  const [openSansLoaded] = useOpenSans({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  });

  const [montserratLoaded] = useMontserrat({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!openSansLoaded || !montserratLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
}
