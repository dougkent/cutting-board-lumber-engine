import { IEngineRequest } from '../models/engine-request.model';
import { IEngineResponse } from '../models/engine-response.model';
import { RoughLumberThicknessEnum } from '../models/rough-lumber-thickness.enum';

export class CuttingBoardPlanningService {

    public getCuttingBoardPlan(
        args: IEngineRequest
    ): IEngineResponse {

        const response: IEngineResponse = {
            boardFeet: 0,
            numberOfPieces: 0,
            panelCrossCutThickness: 0,
            panelWidth: 0,
            pieceLength: 0,
            pieceThickness: 0,
            pieceWidth: 0,
            roughLumberThickness: RoughLumberThicknessEnum.FourQtr,
        };

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

        response.roughLumberThickness = this.getRoughLumberThickness(shorterBlockDimension);

        // Determine Number and Length of pieces
        const numberOfPieces: number = Math.ceil(longerBlockBoardDimension / longerBlockDimension);
        const pieceLength: number = Math.ceil(shorterBlockBoardDimension / shorterBlockDimension) * (args.thickness + 0.125);

        response.numberOfPieces = numberOfPieces;
        response.pieceThickness = shorterBlockDimension;
        response.pieceWidth = longerBlockDimension;
        response.pieceLength = pieceLength;
        response.panelWidth = longerBlockBoardDimension;

        response.boardFeet = this.getBoardFeet(args.width, args.depth, args.thickness);

        return response;
    }

    private getRoughLumberThickness(shorterBlockDimension: number): RoughLumberThicknessEnum {
        // Determine Rough Board thickness
        if (shorterBlockDimension > 0.75 && shorterBlockDimension <= 1) {
            return RoughLumberThicknessEnum.FiveQtr;
        } else if (shorterBlockDimension > 1 && shorterBlockDimension <= 1.25) {
            return RoughLumberThicknessEnum.SixQtr;
        } else if (shorterBlockDimension > 1.25 && shorterBlockDimension <= 1.75) {
            return RoughLumberThicknessEnum.EightQtr;
        } else if (shorterBlockDimension > 1.75 && shorterBlockDimension <= 2.75) {
            return RoughLumberThicknessEnum.TwelveQtr;
        } else if (shorterBlockDimension > 2.75) {
            throw new Error('Invalid block dimension. Must be less than 2.75');
        }

        return RoughLumberThicknessEnum.FourQtr;
    }

    private getBoardFeet(width: number, depth: number, thickness: number): number {
        // Determine Board Feet
        const exactBoardFeet: number = (width * depth * thickness) / 144;
        const roundedBoardFeet: number = Math.ceil(exactBoardFeet);
        return roundedBoardFeet + 2; // Adding in 2 extra board feet to account for loss of material while milling.
    }
}
