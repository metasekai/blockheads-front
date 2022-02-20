import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { AuthProvider } from './providers/AuthProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme/theme';

import './index.css';

// get localstorage colorMode
/**
 * Fix to make sure darkMode is the default
 */
const colorMode = localStorage.getItem('chakra-ui-color-mode');
if (!colorMode) {
  localStorage.setItem('chakra-ui-color-mode', 'dark');
}

// ApolloClient
const client = new ApolloClient({
  uri: 'https://blockend.metasekai.xyz/v1/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <ApolloProvider client={client}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ApolloProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
