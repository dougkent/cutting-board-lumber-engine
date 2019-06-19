import { IEngineQueryInput } from '../models/engine-query-input.model';
import { CuttingBoardPlanningService } from '../services/cutting-board-engine.service';

const service = new CuttingBoardPlanningService();

const root = {
    cuttingBoardPlan: (args: IEngineQueryInput) => {
        return service.getCuttingBoardPlan(args.input);
    }
};

export default root;
