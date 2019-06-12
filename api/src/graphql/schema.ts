import { buildSchema } from 'graphql';
import { RoughLumberThicknessEnum } from '../models/rough-lumber-thickness.enum';

const roughLumberThickness = Object.keys(RoughLumberThicknessEnum)
    .filter((k) => typeof RoughLumberThicknessEnum[k as any] === 'string')
    .join(', ');

const schema = buildSchema(`
    type Query {
        cuttingBoardPlan(width: Float!, depth: Float!, thickness: Float!, blockWidth: Float!, blockDepth: Float!): CuttingBoardPlan
    }

    type CuttingBoardPlan {
        roughLumberThickness: RoughLumberThickness!,
        boardFeet: Int!,
        numberOfPieces: Int!,
        pieceThickness: Float!,
        pieceWidth: Float!,
        pieceLength: Float!,
        panelCrossCutThickness: Float!,
        panelWidth: Float!
    }

    enum RoughLumberThickness {
        ${roughLumberThickness}
    }
`);

export default schema;
