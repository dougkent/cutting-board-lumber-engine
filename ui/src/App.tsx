import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './App.scss';
import CutListFormComponent from './components/Cut-List-Form.Component/Cut-List-Form.Component';

export const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    }
  },
  ssrForceFetchDelay: 200,
});

class App extends Component {

  render() {
    return (
      <div className="container">
        <ApolloProvider client={client}>
          <h1>End Grain Cutting Board Cut List Calculator </h1>
          <CutListFormComponent />
        </ApolloProvider>
      </div>
    )
  }
}

export default App;
