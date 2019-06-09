import { RoughLumberThicknessEnum } from './rough-lumber-thickness.enum';

export interface IEngineResponse {
    roughLumberThickness: RoughLumberThicknessEnum;
    boardFeet: number;
    numberOfPieces: number;
    pieceThickness: number;
    pieceWidth: number;
    pieceLength: number;
    panelCrossCutThickness: number;
    panelWidth: number;
}
