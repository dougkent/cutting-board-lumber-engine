import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import root from './graphql/resolvers';
import schema from './graphql/schema';

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema,
}));

const port = 4000;
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
