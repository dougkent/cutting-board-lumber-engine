"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cutting_board_planning_engine_1 = require("./cutting-board-planning-engine");
exports.handler = async (event, context, callback) => {
    const engine = new cutting_board_planning_engine_1.CuttingBoardPlanningEngine();
    const response = engine.getCuttingBoardPlan(event.input);
    callback(null, response);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtRkFBNkU7QUFFaEUsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQXdCLEVBQUUsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ25GLE1BQU0sTUFBTSxHQUFHLElBQUksMERBQTBCLEVBQUUsQ0FBQztJQUVoRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpELFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDIn0=