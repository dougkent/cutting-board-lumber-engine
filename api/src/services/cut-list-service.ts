import { BoardSizeEnum } from '../models/board-size';
import { ICutList } from '../models/cut-list';

export class CutListService {

    public getCutList(
        width: number,
        depth: number,
        thickness: number,
        blockWidth: number,
        blockDepth: number
    ): ICutList {
        return {
            boardFeet: 12,
            boardSize: BoardSizeEnum.FourQtr,
            cuts: [
                'Cut #1',
            ]
        };
    }
}
