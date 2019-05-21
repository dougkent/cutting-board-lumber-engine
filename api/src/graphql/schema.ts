import { buildSchema } from 'graphql';
import { BoardSizeEnum } from '../models/board-size';

const boardSizeString = Object.keys(BoardSizeEnum)
    .filter((k) => typeof BoardSizeEnum[k as any] === 'string')
    .join(', ');

const schema = buildSchema(`
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

export default schema;
