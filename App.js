import React from 'react';
import client from './client';

import { ApolloProvider } from '@apollo/client';
import Main from './components/Main';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
