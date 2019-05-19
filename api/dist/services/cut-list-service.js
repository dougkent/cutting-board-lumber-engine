"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_size_1 = require("../models/board-size");
class CutListService {
    getCutList(width, depth, thickness, blockWidth, blockDepth) {
        return {
            boardFeet: 12,
            boardSize: board_size_1.BoardSizeEnum.FourQtr,
            cuts: [
                'Cut #1',
            ]
        };
    }
}
exports.CutListService = CutListService;
//# sourceMappingURL=cut-list-service.js.map