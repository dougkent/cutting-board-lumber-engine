import React, { Component } from 'react';

import Input from '@material-ui/core/Input';

import './Cutting-Board-Form.Component.scss';

class CuttingBoardFormComponent extends Component {

    render() {
        return (
            <div>
                <h2>
                    Cutting Board Dimensions
                </h2>
                <div className="row">
                    <Input type="number" placeholder="Width" required />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Depth" required />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Thickness" required />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Block Width" required />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Block Depth" required />
                </div>
            </div>
        )
    }
}

export default CuttingBoardFormComponent;