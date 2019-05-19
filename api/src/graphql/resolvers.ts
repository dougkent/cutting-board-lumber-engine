import { CutListService } from '../services/cut-list-service';

const service = new CutListService();

const root = {
    getCutList: (width: number, depth: number, thickness: number, blockWidth: number, blockDepth: number) => {
        return service.getCutList(width, depth, thickness, blockWidth, blockDepth);
    }
};

export default root;
