import gql from 'graphql-tag';

const query = gql`
    query CuttingBoardPlan($width: Float!, $depth: Float!, $thickness: Float!, $blockWidth: Float!, $blockDepth: Float!) {
        cuttingBoardPlan(width: $width, depth: $depth, thickness: $thickness, blockWidth: $blockWidth, blockDepth: $blockDepth){
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