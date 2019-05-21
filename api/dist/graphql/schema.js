"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const board_size_1 = require("../models/board-size");
const boardSizeString = Object.keys(board_size_1.BoardSizeEnum)
    .filter((k) => typeof board_size_1.BoardSizeEnum[k] === 'string')
    .join(', ');
const schema = graphql_1.buildSchema(`
    type Query {
        cutList(width: Float!, depth: Float!, thickness: Float!, blockWidth: Float!, blockDepth: Float!): CutList
    }

    type CutList {
        boardSize: BoardSize!,
        boardFeet: Int!,
        cuts: [String!]!
    }

    enum BoardSize {
        ${boardSizeString}
    }
`);
exports.default = schema;
//# sourceMappingURL=schema.js.map