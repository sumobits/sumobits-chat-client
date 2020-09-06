/**
 * @format
 */
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Config from 'react-native-config';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContainer } from './containers';

const endpoint = Config.GRAPHQL_ENDPOINT || 'http://127.0.0.1:3000/graphql';
const client = new ApolloClient({ 
  cache: new InMemoryCache({}),
  uri: endpoint 
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
          <AuthContainer />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
