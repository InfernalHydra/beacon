import React, {Component} from 'react';
import Button from './Record/Button';

export default class Record extends Component {
    constructor (props) {
        super(props);
        this.state ={view:false}
    }

    render() {
        return (
            <Button/>
        )
    }
}