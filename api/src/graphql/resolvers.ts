import { IEngineRequest } from '../models/engine-request.model';
import { CuttingBoardPlanningService } from '../services/cutting-board-engine.service';

const service = new CuttingBoardPlanningService();

const root = {
    cuttingBoardPlan: (args: IEngineRequest) => {
        return service.getCuttingBoardPlan(args);
    }
};

export default root;
