import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Route } from 'wouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

// 1. Import the extendTheme function
// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    brand: {
      50: '#defdfd',
      100: '#bbf0f1',
      200: '#96e6e4',
      300: '#6edad4',
      400: '#49cfc3',
      500: '#30b6b3',
      600: '#208a8e',
      700: '#105c66',
      800: '#00323e',
      900: '#001117',
    },
  },
  config: {
    useSystemColorMode: true,
  }
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Route component={Home} path="/" />

      <Footer />
    </ChakraProvider>
  );
}

export default App;
