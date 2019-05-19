import { buildSchema } from 'graphql';
import { BoardSizeEnum } from '../models/board-size';

const boardSizeString = Object.keys(BoardSizeEnum)
    .filter((k) => typeof BoardSizeEnum[k as any] === 'string')
    .join(', ');

const schema = buildSchema(`
    type Query {
        getCutList(width: Int!, depth: Int!, thickness: Int!, blockWidth: Int!, blockDepth: Int!): CutList
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

export default schema;
