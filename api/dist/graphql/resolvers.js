"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cut_list_service_1 = require("../services/cut-list-service");
const service = new cut_list_service_1.CutListService();
const root = {
    cutList: (args) => {
        return service.getCutList(args);
    }
};
exports.default = root;
//# sourceMappingURL=resolvers.js.map