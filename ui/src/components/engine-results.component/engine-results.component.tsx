import React from 'react';
import { Query } from 'react-apollo';

import { IEngineResponse } from '../../models/engine-response.model';
//import { IEngineRequest } from '../../models/engine-request.model';
import { IEngineInput } from '../../models/engine-input.model';
import { RoughLumberThicknessEnum } from '../../models/rough-lumber-thickness.enum';
import engineQuery from './engine.query';

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
    <Query<IEngineResponse, IEngineInput>
        query={engineQuery}
        variables={props}>
        {
            ({ loading, error, data }) => {
                if (loading || !data) return <h1>Loading...</h1>
                if (error) return <h1>Something went wrong... {error.message}</h1>

                return <div>
                    <h2>Board Feet: {data.cuttingBoardPlan.boardFeet}</h2>
                    <h3>Board Thickness: {getDisplayBoardThickness(data.cuttingBoardPlan.roughLumberThickness)}</h3>
                    <h3>Build Process</h3>
                    <ol>
                        <li>Mill rough boards to {data.cuttingBoardPlan.numberOfPieces} pieces {data.cuttingBoardPlan.pieceThickness} inches thick x {data.cuttingBoardPlan.pieceWidth} inches wide x {data.cuttingBoardPlan.pieceLength} inches long.</li>
                        <li>Glue the pieces together into a {data.cuttingBoardPlan.panelWidth} inch wide panel.</li>
                        <li>Crosscut panels into ${data.cuttingBoardPlan.panelCrossCutThickness} inch wide strips.</li>
                        <li>Rotate strips 90 degrees so engrain is facing up and down and glue strips together.</li>
                        <li>Sand and Finish.</li>
                        <li>Deliver to the client!</li>
                    </ol>
                </div>
            }
        }
    </Query>
);

export default EngineResultsComponent