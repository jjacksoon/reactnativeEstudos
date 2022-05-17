import React from 'react';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';

import {ThemeProvider} from 'styled-components';
import { SplashScreen } from './src/pages/SplashScreen';
import {
  useFonts, 
  Poppins_700Bold, 
  Poppins_600SemiBold, 
  Poppins_400Regular
} from "@expo-google-fonts/poppins";

export default function App() {
  const[fontsLoaded]= useFonts({
    Poppins_700Bold, 
    Poppins_600SemiBold, 
    Poppins_400Regular
  });
  
  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <SplashScreen/>
    </ThemeProvider>
  );
}
