import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import HelloQuery from './Hello';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <nav className="navbar">
      <a className="navbar-brand" href="">
        GraphQL in React - Demo application
      </a>
    </nav>
    <div className="container">
      <HelloQuery />
    </div>
  </ApolloProvider>
)

export default App;
