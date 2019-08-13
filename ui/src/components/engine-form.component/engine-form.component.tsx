import React, { Component, ChangeEvent } from 'react';

import Input from '@material-ui/core/Input';

import './engine-form.component.scss';
import { IEngineRequest } from '../../models/engine-request.model';
import EngineResultsComponent from '../engine-results.component/engine-results.component';

class EngineFormComponent extends Component {

    state: IEngineRequest = {
        width: 12,
        depth: 10,
        thickness: 1,
        blockWidth: 1.5,
        blockDepth: 1,
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
                <div className="form">
                    <h2>
                        Cutting Board Dimensions
                    </h2>
                    <div className="row">
                        <span className="field">
                            <label>Width: </label>
                            <Input type="number"
                                placeholder="Width"
                                name='width'
                                inputProps={{ step: 0.25, min: 8 }}
                                value={this.state.width}
                                required
                                onChange={this.handleChange} />
                        </span>
                        <span className="field">
                            <label>Depth: </label>
                            <Input type="number"
                                placeholder="Depth"
                                name='depth'
                                inputProps={{ step: 0.25, min: 8 }}
                                value={this.state.depth}
                                required
                                onChange={this.handleChange} />
                        </span>
                        <span className="field">
                            <label>Thickness: </label>
                            <Input type="number"
                                placeholder="Thickness"
                                name='thickness'
                                inputProps={{ step: 0.125, min: 0.75, max: 2.5 }}
                                value={this.state.thickness}
                                required
                                onChange={this.handleChange} />
                        </span>
                        <span className="field">
                            <label>Block Width: </label>
                            <Input type="number"
                                placeholder="Block Width"
                                name='blockWidth'
                                inputProps={{ step: 0.125, min: 0.5, max: 2.75 }}
                                value={this.state.blockWidth}
                                required
                                onChange={this.handleChange} />
                        </span>
                        <span className="field">
                            <label>Block Depth: </label>
                            <Input type="number"
                                placeholder="Block Depth"
                                name='blockDepth'
                                inputProps={{ step: 0.125, min: 0.5, max: 2.75 }}
                                value={this.state.blockDepth}
                                required
                                onChange={this.handleChange} />
                        </span>
                    </div>
                </div>
                <EngineResultsComponent input={this.state} />
            </div>
        )
    }
}

export default EngineFormComponent;