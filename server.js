var express = require('express')
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var root = {
    hello: () => {
        return "Hello World";
    },
};

var app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

var port = 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));