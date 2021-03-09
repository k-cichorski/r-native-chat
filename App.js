import React from 'react';
import client from './client';

import { ApolloProvider } from '@apollo/client';
import Main from './components/Main';
import { StateProvider } from './store/StateProvider';
import { initialState, reducer } from './store/reducer';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Main />
      </StateProvider>
    </ApolloProvider>
  );
}
