import React, { Component, ChangeEvent } from 'react';

import Input from '@material-ui/core/Input';

import './Cut-List-Form.Component.scss';
import { ICutListVariables } from '../../models/ICutListVariables.Model';
import CutListComponent from '../Cut-List.Component/Cut-List.Component';

class CutListFormComponent extends Component {

    state: ICutListVariables = {
        width: 0,
        depth: 0,
        thickness: 0,
        blockWidth: 0,
        blockDepth: 0,
    };

    handleChange = (event: ChangeEvent) => {
        var element = event.target as HTMLInputElement;
        var key: string = element.name;
        var value: number = parseFloat(element.value);

        this.setState({
            [key]: value
        });
    }

    render() {
        return (
            <div>
                <h2>
                    Cutting Board Dimensions
                </h2>
                <div className="row">
                    <label>Width: </label>
                    <Input type="number"
                        placeholder="Width"
                        name='width'
                        inputProps={{ step: 0.5 }}
                        value={this.state.width}
                        required
                        onChange={this.handleChange} />
                </div>
                <div className="row">
                    <label>Depth: </label>
                    <Input type="number"
                        placeholder="Depth"
                        name='depth'
                        inputProps={{ step: 0.5 }}
                        value={this.state.depth}
                        required
                        onChange={this.handleChange} />
                </div>
                <div className="row">
                    <label>Thickness: </label>
                    <Input type="number"
                        placeholder="Thickness"
                        name='thickness'
                        inputProps={{ step: 0.5 }}
                        value={this.state.thickness}
                        required
                        onChange={this.handleChange} />
                </div>
                <div className="row">
                    <label>Block Width: </label>
                    <Input type="number"
                        placeholder="Block Width"
                        name='blockWidth'
                        inputProps={{ step: 0.5 }}
                        value={this.state.blockWidth}
                        required
                        onChange={this.handleChange} />
                </div>
                <div className="row">
                    <label>Block Depth: </label>
                    <Input type="number"
                        placeholder="Block Depth"
                        name='blockDepth'
                        inputProps={{ step: 0.5 }}
                        value={this.state.blockDepth}
                        required
                        onChange={this.handleChange} />
                </div>

                <CutListComponent variables={this.state} />
            </div>
        )
    }
}

export default CutListFormComponent;