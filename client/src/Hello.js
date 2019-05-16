import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const HelloQuery = () => (
    <Query
        query={gql`
        {
            Hello
        }
      `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Something went wrong.</p>

            return <div>data</div>
        }}
    </Query>
);

export default HelloQuery;