"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rough_lumber_thickness_enum_1 = require("./models/rough-lumber-thickness.enum");
class CuttingBoardPlanningEngine {
    getCuttingBoardPlan(args) {
        const response = {
            boardFeet: 0,
            numberOfPieces: 0,
            panelCrossCutThickness: 0,
            panelWidth: 0,
            pieceLength: 0,
            pieceThickness: 0,
            pieceWidth: 0,
            roughLumberThickness: rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.FourQtr,
        };
        let shorterBlockDimension = args.blockWidth;
        let longerBlockDimension = args.blockDepth;
        let shorterBlockBoardDimension = args.width;
        let longerBlockBoardDimension = args.depth;
        if (args.blockWidth > args.blockDepth) {
            shorterBlockDimension = args.blockDepth;
            shorterBlockBoardDimension = args.depth;
            longerBlockDimension = args.blockWidth;
            longerBlockBoardDimension = args.width;
        }
        response.roughLumberThickness = this.getRoughLumberThickness(shorterBlockDimension);
        // Determine Number and Length of pieces
        const numberOfPieces = Math.ceil(longerBlockBoardDimension / longerBlockDimension);
        const pieceLength = Math.ceil(shorterBlockBoardDimension / shorterBlockDimension) * (args.thickness + 0.125);
        response.numberOfPieces = numberOfPieces;
        response.pieceThickness = shorterBlockDimension;
        response.pieceWidth = longerBlockDimension;
        response.pieceLength = pieceLength;
        response.panelWidth = longerBlockBoardDimension;
        response.panelCrossCutThickness = args.thickness;
        response.boardFeet = this.getBoardFeet(args.width, args.depth, args.thickness);
        return response;
    }
    getRoughLumberThickness(shorterBlockDimension) {
        // Determine Rough Board thickness
        if (shorterBlockDimension > 0.75 && shorterBlockDimension <= 1) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.FiveQtr;
        }
        else if (shorterBlockDimension > 1 && shorterBlockDimension <= 1.25) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.SixQtr;
        }
        else if (shorterBlockDimension > 1.25 && shorterBlockDimension <= 1.75) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.EightQtr;
        }
        else if (shorterBlockDimension > 1.75 && shorterBlockDimension <= 2.75) {
            return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.TwelveQtr;
        }
        else if (shorterBlockDimension > 2.75) {
            throw new Error('Invalid block dimension. Must be less than 2.75');
        }
        return rough_lumber_thickness_enum_1.RoughLumberThicknessEnum.FourQtr;
    }
    getBoardFeet(width, depth, thickness) {
        // Determine Board Feet
        const exactBoardFeet = (width * depth * thickness) / 144;
        const roundedBoardFeet = Math.ceil(exactBoardFeet);
        return roundedBoardFeet + 2; // Adding in 2 extra board feet to account for loss of material while milling.
    }
}
exports.CuttingBoardPlanningEngine = CuttingBoardPlanningEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3V0dGluZy1ib2FyZC1wbGFubmluZy1lbmdpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3V0dGluZy1ib2FyZC1wbGFubmluZy1lbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzRkFBZ0Y7QUFFaEYsTUFBYSwwQkFBMEI7SUFFNUIsbUJBQW1CLENBQ3RCLElBQW9CO1FBR3BCLE1BQU0sUUFBUSxHQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQztZQUNaLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLHNCQUFzQixFQUFFLENBQUM7WUFDekIsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSxDQUFDO1lBQ2Isb0JBQW9CLEVBQUUsc0RBQXdCLENBQUMsT0FBTztTQUN6RCxDQUFDO1FBRUYsSUFBSSxxQkFBcUIsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BELElBQUksb0JBQW9CLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuRCxJQUFJLDBCQUEwQixHQUFXLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSx5QkFBeUIsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRW5ELElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV4QyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUM7UUFFRCxRQUFRLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFcEYsd0NBQXdDO1FBQ3hDLE1BQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztRQUMzRixNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRXJILFFBQVEsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7UUFDaEQsUUFBUSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQztRQUMzQyxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxRQUFRLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDO1FBQ2hELFFBQVEsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWpELFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRS9FLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxxQkFBNkI7UUFDekQsa0NBQWtDO1FBQ2xDLElBQUkscUJBQXFCLEdBQUcsSUFBSSxJQUFJLHFCQUFxQixJQUFJLENBQUMsRUFBRTtZQUM1RCxPQUFPLHNEQUF3QixDQUFDLE9BQU8sQ0FBQztTQUMzQzthQUFNLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLHFCQUFxQixJQUFJLElBQUksRUFBRTtZQUNuRSxPQUFPLHNEQUF3QixDQUFDLE1BQU0sQ0FBQztTQUMxQzthQUFNLElBQUkscUJBQXFCLEdBQUcsSUFBSSxJQUFJLHFCQUFxQixJQUFJLElBQUksRUFBRTtZQUN0RSxPQUFPLHNEQUF3QixDQUFDLFFBQVEsQ0FBQztTQUM1QzthQUFNLElBQUkscUJBQXFCLEdBQUcsSUFBSSxJQUFJLHFCQUFxQixJQUFJLElBQUksRUFBRTtZQUN0RSxPQUFPLHNEQUF3QixDQUFDLFNBQVMsQ0FBQztTQUM3QzthQUFNLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUN0RTtRQUVELE9BQU8sc0RBQXdCLENBQUMsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxTQUFpQjtRQUNoRSx1QkFBdUI7UUFDdkIsTUFBTSxjQUFjLEdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqRSxNQUFNLGdCQUFnQixHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsT0FBTyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyw4RUFBOEU7SUFDL0csQ0FBQztDQUNKO0FBdkVELGdFQXVFQyJ9