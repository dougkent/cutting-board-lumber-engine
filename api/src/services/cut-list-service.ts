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

        // TODO: Add business logic here
        // 1. Determine Board thickness based on block width
        // 2. Determine Board Volume based on dimensions passed in
        // 3. Round up Board Volume up to nearest whole number and add a fudge factor for milling and saw kerf to get board feet
        // 4. Determine dimensions for pieces to be milled
        // 5. Determine dimensions for pieces to be cut after glued up

        return {
            boardFeet: 12,
            boardSize: BoardSizeEnum.FourQtr,
            cuts: [
                'Cut #1',
            ]
        };
    }
}
