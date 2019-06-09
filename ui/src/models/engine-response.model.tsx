import { RoughLumberThicknessEnum } from './rough-lumber-thickness.enum';

export interface IEngineResponse {
    cuttingBoardPlan: {
        roughLumberThickness: RoughLumberThicknessEnum;
        boardFeet: number;
        numberOfPieces: number;
        pieceThickness: number;
        pieceWidth: number;
        pieceLength: number;
        panelWidth: number;
        panelCrossCutThickness: number;
    }
}