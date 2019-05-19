import { BoardSizeEnum } from './board-size';

export interface ICutList {
    boardSize: BoardSizeEnum;
    boardFeet: number;
    cuts: string[];
}
