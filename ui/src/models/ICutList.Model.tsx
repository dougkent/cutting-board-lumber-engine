import { BoardSizeEnum } from './BoardSize.Enum';

export interface ICutList {
    cutList: {
        boardSize: BoardSizeEnum;
        boardFeet: number;
        cuts: string[];
    }
}