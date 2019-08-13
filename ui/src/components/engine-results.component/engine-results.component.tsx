// React
import React from 'react';

// AWS
import Amplify, { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import aws_exports from '../../aws-exports';

// Cutting Board Lumber Engine
import { IEngineResponse } from '../../models/engine-response.model';
import { IEngineInput } from '../../models/engine-input.model';
import { RoughLumberThicknessEnum } from '../../models/rough-lumber-thickness.enum';
import engineQuery from './engine.query';

// Configure
Amplify.configure(aws_exports);

function getDisplayBoardThickness(roughLumberThickness: RoughLumberThicknessEnum): string {
    switch (roughLumberThickness) {
        case RoughLumberThicknessEnum.FourQtr:
            return "4/4";
        case RoughLumberThicknessEnum.FiveQtr:
            return "5/4";
        case RoughLumberThicknessEnum.SixQtr:
            return "6/4";
        case RoughLumberThicknessEnum.EightQtr:
            return "8/4";
        case RoughLumberThicknessEnum.TwelveQtr:
            return "12/4";
        default:
            return "N/A";
    }
}

const EngineResultsComponent = (props: IEngineInput) => (
    <Connect query={graphqlOperation(engineQuery, props)}>
        {
            ({ data, loading, error }: { data: IEngineResponse, loading: boolean, error: Array<Error> }) => {
                if (loading || !data) return <h1>Loading...</h1>
                if (error) {
                    console.log(error);
                    return <h1>Something went wrong...</h1>
                }

                return <div>
                    <h2>Board Feet: {data.cuttingBoardPlan.boardFeet}</h2>
                    <h3>Board Thickness: {getDisplayBoardThickness(data.cuttingBoardPlan.roughLumberThickness)}</h3>
                    <h3>Build Process</h3>
                    <ol>
                        <li>Mill rough boards to <b>{data.cuttingBoardPlan.numberOfPieces}</b> pieces <b>{data.cuttingBoardPlan.pieceThickness} inches</b> thick x <b>{data.cuttingBoardPlan.pieceWidth} inches</b> wide x <b>{data.cuttingBoardPlan.pieceLength} inches</b> long.</li>
                        <li>Glue the pieces together into a <b>{data.cuttingBoardPlan.panelWidth} inch</b> wide panel.</li>
                        <li>Crosscut panels into <b>{data.cuttingBoardPlan.panelCrossCutThickness} inch</b> wide strips.</li>
                        <li>Rotate strips 90 degrees so engrain is facing up and down and glue strips together.</li>
                        <li>Sand and Finish.</li>
                        <li>Deliver to the client!</li>
                    </ol>
                </div>
            }
        }
    </Connect>
);

export default EngineResultsComponent