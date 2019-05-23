import { ICutListVariables } from '../models/cut-list-variables';
import { CutListService } from '../services/cut-list-service';

const service = new CutListService();

const root = {
    cutList: (args: ICutListVariables) => {
        return service.getCutList(args);
    }
};

export default root;
