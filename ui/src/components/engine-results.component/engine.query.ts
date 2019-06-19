import gql from 'graphql-tag';

const query = gql`
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