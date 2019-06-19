"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cutting_board_engine_service_1 = require("../services/cutting-board-engine.service");
const service = new cutting_board_engine_service_1.CuttingBoardPlanningService();
const root = {
    cuttingBoardPlan: (args) => {
        return service.getCuttingBoardPlan(args.input);
    }
};
exports.default = root;
//# sourceMappingURL=resolvers.js.map