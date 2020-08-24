/**
 * @format
 */
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Config from 'react-native-config';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from '@reduxjs/toolkit';
import { UserContainer } from './containers';

const endpoint = Config.GRAPHQL_ENDPOINT || 'http://127.0.0.1:3000/graphql';
const client = new ApolloClient({ uri: endpoint });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
          <UserContainer />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
