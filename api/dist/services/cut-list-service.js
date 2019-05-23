"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_size_1 = require("../models/board-size");
class CutListService {
    getCutList(args) {
        let boardSize = board_size_1.BoardSizeEnum.FourQtr;
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
        // Determine Rough Board thickness
        if (shorterBlockDimension > 0.75 && shorterBlockDimension <= 1) {
            boardSize = board_size_1.BoardSizeEnum.FiveQtr;
        }
        else if (shorterBlockDimension <= 1.25) {
            boardSize = board_size_1.BoardSizeEnum.SixQtr;
        }
        else if (shorterBlockDimension <= 1.75) {
            boardSize = board_size_1.BoardSizeEnum.EightQtr;
        }
        else if (shorterBlockDimension <= 2.75) {
            boardSize = board_size_1.BoardSizeEnum.TwelveQtr;
        }
        else {
            throw new Error('Invalid block dimension. Must be less than 2.75');
        }
        // Determine Number and Length of pieces
        let numberOfPieces;
        let lengthOfPieces;
        numberOfPieces = Math.ceil(longerBlockBoardDimension / longerBlockDimension);
        lengthOfPieces = Math.ceil(shorterBlockBoardDimension / shorterBlockDimension) * (args.thickness + 0.125);
        // Create Cut List
        const cuts = [];
        cuts.push(`Mill rough boards to ${numberOfPieces} pieces ${shorterBlockDimension} inches thick x ${longerBlockDimension} inches wide x ${lengthOfPieces} inches long.`);
        cuts.push(`Glue them together into a panel.`);
        cuts.push(`Crosscut panels into ${args.thickness} inch wide strips.`);
        cuts.push(`Rotate strips 90 degrees so engrain is facing up and down and glue strips together.`);
        cuts.push(`Sand and Finish`);
        // Determine Board Feet
        const exactBoardFeet = (args.width * args.depth * args.thickness) / 144;
        const roundedBoardFeet = Math.ceil(exactBoardFeet);
        const boardFeet = roundedBoardFeet + 2; // Adding in 2 extra board feet to account for loss of material while milling.
        return {
            boardFeet,
            boardSize,
            cuts
        };
    }
}
exports.CutListService = CutListService;
//# sourceMappingURL=cut-list-service.js.map