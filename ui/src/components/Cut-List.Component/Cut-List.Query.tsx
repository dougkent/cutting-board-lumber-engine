import gql from 'graphql-tag';

const query = gql`
    query CutList($width: Float!, $depth: Float!, $thickness: Float!, $blockWidth: Float!, $blockDepth: Float!) {
        cutList(width: $width, depth: $depth, thickness: $thickness, blockWidth: $blockWidth, blockDepth: $blockDepth){
            boardSize
            boardFeet
            cuts
          }
    }
`;

export default query;