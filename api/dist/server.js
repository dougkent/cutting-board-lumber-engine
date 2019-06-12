"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const schema_1 = __importDefault(require("./graphql/schema"));
const app = express_1.default();
app.use(cors_1.default());
app.use('/graphql', express_graphql_1.default({
    graphiql: true,
    rootValue: resolvers_1.default,
    schema: schema_1.default,
}));
const port = 4000;
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=server.js.map