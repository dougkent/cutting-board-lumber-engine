"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rough_lumber_thickness_enum_1 = require("../models/rough-lumber-thickness.enum");
class CuttingBoardPlanningService {
    getCuttingBoardPlan(args) {
        const response = {
            boardFeet: 0,
            numberOfPieces: 0,
            panelCrossCutThickness: 0,
            panelWidth: 0,
            pieceLength: 0,
            pieceThickness: 0,
            pieceWidth: 0,
            roughLumberThickness: rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.FourQtr,
        };
        let shorterBlockDimension = args.blockWidth;
        let longerBlockDimension = args.blockDepth;
        let shorterBlockBoardDimension = args.width;
        let longerBlockBoardDimension = args.depth;
        if (args.blockWidth > args.blockDepth) {
            shorterBlockDimension = args.blockDepth;
            shorterBlockBoardDimension = args.depth;
            longerBlockDimension = args.blockWidth;
            longerBlockBoardDimension = args.width;
        }
        response.roughLumberThickness = this.getRoughLumberThickness(shorterBlockDimension);
        // Determine Number and Length of pieces
        const numberOfPieces = Math.ceil(longerBlockBoardDimension / longerBlockDimension);
        const pieceLength = Math.ceil(shorterBlockBoardDimension / shorterBlockDimension) * (args.thickness + 0.125);
        response.numberOfPieces = numberOfPieces;
        response.pieceThickness = shorterBlockDimension;
        response.pieceWidth = longerBlockDimension;
        response.pieceLength = pieceLength;
        response.panelWidth = longerBlockBoardDimension;
        response.boardFeet = this.getBoardFeet(args.width, args.depth, args.thickness);
        return response;
    }
    getRoughLumberThickness(shorterBlockDimension) {
        // Determine Rough Board thickness
        if (shorterBlockDimension > 0.75 && shorterBlockDimension <= 1) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.FiveQtr;
        }
        else if (shorterBlockDimension > 1 && shorterBlockDimension <= 1.25) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.SixQtr;
        }
        else if (shorterBlockDimension > 1.25 && shorterBlockDimension <= 1.75) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.EightQtr;
        }
        else if (shorterBlockDimension > 1.75 && shorterBlockDimension <= 2.75) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.TwelveQtr;
        }
        else if (shorterBlockDimension > 2.75) {
            throw new Error('Invalid block dimension. Must be less than 2.75');
        }
        return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.FourQtr;
    }
    getBoardFeet(width, depth, thickness) {
        // Determine Board Feet
        const exactBoardFeet = (width * depth * thickness) / 144;
        const roundedBoardFeet = Math.ceil(exactBoardFeet);
        return roundedBoardFeet + 2; // Adding in 2 extra board feet to account for loss of material while milling.
    }
}
exports.CuttingBoardPlanningService = CuttingBoardPlanningService;
//# sourceMappingURL=cutting-board-engine.service.js.map