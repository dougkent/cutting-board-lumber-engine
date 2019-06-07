import React from 'react';
import { Query } from 'react-apollo';

import { ICutList } from '../../models/ICutList.Model';
import { ICutListVariables } from '../../models/ICutListVariables.Model';
import { BoardSizeEnum } from '../../models/BoardSize.Enum';
import cutListQuery from './Cut-List.Query';

function getDisplayBoardThickness(boardSize: BoardSizeEnum): string {

    console.log(boardSize);

    switch (boardSize) {
        case BoardSizeEnum.FourQtr:
            return "4/4";
        case BoardSizeEnum.FiveQtr:
            return "5/4";
        case BoardSizeEnum.SixQtr:
            return "6/4";
        case BoardSizeEnum.EightQtr:
            return "8/4";
        case BoardSizeEnum.TwelveQtr:
            return "12/4";
        default:
            return "N/A";
    }
}

const CutListComponent = (props: any) => (
    <Query<ICutList, ICutListVariables>
        query={cutListQuery}
        variables={props.variables}>
        {
            ({ loading, error, data }) => {
                if (loading || !data) return <h1>Loading...</h1>
                if (error) return <h1>Something went wrong... {error.message}</h1>

                return <div>
                    <h2>Board Feet: {data.cutList.boardFeet}</h2>
                    <h3>Board Thickness: {getDisplayBoardThickness(data.cutList.boardSize)}</h3>
                    <h3>Build Process</h3>
                    <ol>
                        {
                            data!.cutList.cuts.map((cut, index) => (
                                <li key={index}>
                                    {cut}
                                </li>
                            ))
                        }
                    </ol>
                </div>
            }
        }

    </Query>
);

export default CutListComponent