import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './App.scss';
import HelloComponent from './components/Hello.Component';
import CuttingBoardFormComponent from './components/Cutting-Board-Form.Component/Cutting-Board-Form.Component';

export const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>End Grain Cutting Board Cut List Calculator </h1>
        <CuttingBoardFormComponent />
        <ApolloProvider client={client}>
          <HelloComponent />
        </ApolloProvider>
      </div>
    )
  }
}

export default App;
