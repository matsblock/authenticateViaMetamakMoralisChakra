import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MoralisProvider } from "react-moralis";
import { createRoot } from 'react-dom/client';




const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
      <MoralisProvider appId="LVfYTWUxBQz5KomlpuKzrkthbFUePSkjPdxEOato"serverUrl="https://wlwddbgbw0je.usemoralis.com:2053/server">

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
