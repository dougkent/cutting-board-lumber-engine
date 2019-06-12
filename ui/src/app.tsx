import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './app.scss';
import EngineFormComponent from './components/engine-form.component/engine-form.component';

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
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
      <div className="container fade-in">
        <ApolloProvider client={client}>
          <h1>End Grain Cutting Board Planning Engine </h1>
          <EngineFormComponent />
        </ApolloProvider>
      </div>
    )
  }
}

export default App;
