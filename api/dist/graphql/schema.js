"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const rough_lumber_thickness_enum_1 = require("../models/rough-lumber-thickness.enum");
const roughLumberThickness = Object.keys(rough_lumber_thickness_enum_1.RoughLumberThicknessEnum)
    .filter((k) => typeof rough_lumber_thickness_enum_1.RoughLumberThicknessEnum[k] === 'string')
    .join(', ');
const schema = graphql_1.buildSchema(`
    type Query {
        cuttingBoardPlan(input: CuttingBoardPlanRequest): CuttingBoardPlan
    }

    input CuttingBoardPlanRequest {
        width: Float!,
        depth: Float!,
        thickness: Float!,
        blockWidth: Float!,
        blockDepth: Float!
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
exports.default = schema;
//# sourceMappingURL=schema.js.map