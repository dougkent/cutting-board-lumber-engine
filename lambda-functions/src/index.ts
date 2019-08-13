// Cutting Board Lumber Engine
import { IEngineQueryInput } from "./models/engine-query-input.model";
import { CuttingBoardPlanningEngine } from "./cutting-board-planning-engine";

export const handler = async (event: IEngineQueryInput, context: any, callback: any) => {
    const engine = new CuttingBoardPlanningEngine();

    const response = engine.getCuttingBoardPlan(event.input);

    callback(null, response);
};