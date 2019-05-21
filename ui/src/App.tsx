import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './App.scss';
import CutListFormComponent from './components/Cut-List-Form.Component/Cut-List-Form.Component';
import CutListComponent from './components/Cut-List.Component/Cut-List.Component';
import { ICutListVariables } from './models/ICutListVariables.Model';

export const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

class App extends Component {
  _variables: ICutListVariables | undefined;

  onChange = (variables: ICutListVariables) => {
    this._variables = variables;
  }

  render() {
    return (
      <div className="container">
        <h1>End Grain Cutting Board Cut List Calculator </h1>
        <CutListFormComponent />
        <ApolloProvider client={client}>
          <CutListComponent />
        </ApolloProvider>
      </div>
    )
  }
}

export default App;
