import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './App.scss';
import HelloComponent from './components/Hello.Component';

export const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  fetchOptions: {
    mode: 'no-cors',
  },
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <HelloComponent />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
