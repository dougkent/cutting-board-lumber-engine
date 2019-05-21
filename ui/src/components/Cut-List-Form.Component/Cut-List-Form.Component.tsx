import React, { Component, ChangeEvent } from 'react';

import Input from '@material-ui/core/Input';

import './Cut-List-Form.Component.scss';
import { ICutListVariables } from '../../models/ICutListVariables.Model';

class CutListFormComponent extends Component {

    state: ICutListVariables = {
        width: 0,
        depth: 0,
        thickness: 0,
        blockWidth: 0,
        blockDepth: 0,
    };

    handleChange = (key: string, event: ChangeEvent) => {
        var element = event.target as HTMLInputElement
        this.setState({ [key]: element.value });
        //this.props.onChange(this.state);
    }

    render() {
        return (
            <div>
                <h2>
                    Cutting Board Dimensions
                </h2>
                <div className="row">
                    <Input type="number" placeholder="Width" required onChange={(e) => this.handleChange('width', e)} />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Depth" required onChange={(e) => this.handleChange('depth', e)} />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Thickness" required onChange={(e) => this.handleChange('thickness', e)} />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Block Width" required onChange={(e) => this.handleChange('blockWidth', e)} />
                </div>
                <div className="row">
                    <Input type="number" placeholder="Block Depth" required onChange={(e) => this.handleChange('blockDepth', e)} />
                </div>
            </div>
        )
    }
}

export default CutListFormComponent;