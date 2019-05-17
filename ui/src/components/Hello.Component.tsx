import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const helloQuery = gql`
query HelloQuery {
    hello
}`;

interface Data {
    hello: string
}

const HelloComponent = () => (
    <Query<Data> query={helloQuery}>
        {
            ({ loading, error, data }) => {
                if (loading) return <h1>Loading...</h1>
                if (error) return <h1>Something went wrong... {error}</h1>

                return <h1>{data!.hello}</h1>;
            }
        }
    </Query>
)

export default HelloComponent;