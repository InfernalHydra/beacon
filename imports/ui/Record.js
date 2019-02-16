import React, {Component} from 'react';
import Button from './Record/Button';
import Manual from './Record/Manual';
import {Footer} from 'react-materialize';
export default class Record extends Component {
    constructor (props) {
        super(props);
        this.state ={view:false}
    }

    render() {
        return (
            <div>
                <div id="container">
                {this.state.view ? <Button/> : <Manual/>}
                </div>        
                
            </div>
        )
        

        
    }
}