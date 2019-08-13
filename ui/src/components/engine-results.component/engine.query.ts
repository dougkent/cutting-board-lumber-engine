const query = `
    query CuttingBoardPlan($input: CuttingBoardPlanRequest) {
        cuttingBoardPlan(input: $input){
            roughLumberThickness,
            boardFeet,
            numberOfPieces,
            pieceThickness,
            pieceWidth,
            pieceLength,
            panelCrossCutThickness,
            panelWidth
          }
    }
`;

export default query;