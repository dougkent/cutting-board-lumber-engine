import { BoardSizeEnum } from '../models/board-size';
import { ICutList } from '../models/cut-list';
import { ICutListVariables } from '../models/cut-list-variables';

export class CutListService {

    public getCutList(
        args: ICutListVariables
    ): ICutList {

        let boardSize: BoardSizeEnum = BoardSizeEnum.FourQtr;

        let shorterBlockDimension: number = args.blockWidth;
        let longerBlockDimension: number = args.blockDepth;
        let shorterBlockBoardDimension: number = args.width;
        let longerBlockBoardDimension: number = args.depth;

        if (args.blockWidth > args.blockDepth) {
            shorterBlockDimension = args.blockDepth;
            shorterBlockBoardDimension = args.depth;

            longerBlockDimension = args.blockWidth;
            longerBlockBoardDimension = args.width;
        }

        // Determine Rough Board thickness
        if (shorterBlockDimension > 0.75 && shorterBlockDimension <= 1) {
            boardSize = BoardSizeEnum.FiveQtr;
        } else if (shorterBlockDimension > 1 && shorterBlockDimension <= 1.25) {
            boardSize = BoardSizeEnum.SixQtr;
        } else if (shorterBlockDimension > 1.25 && shorterBlockDimension <= 1.75) {
            boardSize = BoardSizeEnum.EightQtr;
        } else if (shorterBlockDimension > 1.75 && shorterBlockDimension <= 2.75) {
            boardSize = BoardSizeEnum.TwelveQtr;
        } else if (shorterBlockDimension > 2.75) {
            throw new Error('Invalid block dimension. Must be less than 2.75');
        }

        // Determine Number and Length of pieces
        let numberOfPieces: number;
        let lengthOfPieces: number;

        numberOfPieces = Math.ceil(longerBlockBoardDimension / longerBlockDimension);
        lengthOfPieces = Math.ceil(shorterBlockBoardDimension / shorterBlockDimension) * (args.thickness + 0.125);

        // Create Cut List
        const cuts: string[] = [];
        cuts.push(`Mill rough boards to ${numberOfPieces} pieces ${shorterBlockDimension} inches thick x ${longerBlockDimension} inches wide x ${lengthOfPieces} inches long.`);
        cuts.push(`Glue them together into a panel.`);
        cuts.push(`Crosscut panels into ${args.thickness} inch wide strips.`);
        cuts.push(`Rotate strips 90 degrees so engrain is facing up and down and glue strips together.`);
        cuts.push(`Sand and Finish`);

        // Determine Board Feet
        const exactBoardFeet: number = (args.width * args.depth * args.thickness) / 144;
        const roundedBoardFeet: number = Math.ceil(exactBoardFeet);
        const boardFeet: number = roundedBoardFeet + 2; // Adding in 2 extra board feet to account for loss of material while milling.

        return {
            boardFeet,
            boardSize,
            cuts
        };
    }
}
