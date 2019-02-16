import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Input, Row, Button} from 'react-materialize';
const googleMapsClient = require('@google/maps');

export default class Manual extends Component {
    constructor (props) {
        super(props);
        let state = {};        
        this.handleChange = this.handleChange.bind(this)    
        this.send = this.send.bind(this)
    }
    send () {
        console.log(this.state)
        const gmap = googleMapsClient.createClient({
            key: 'AIzaSyDwycw2h_XzL94n0bSXRxbXX8rrSXOaD3w'
        });

        gmap.geocode({address: this.state.add + ", "  + this.state.city + ", " + this.state.state}, function(err, response) {
            if (!err) {
                console.log(response);
            }
            else {
                console.log (err);
            }
        });

    }

    handleChange(e){
        var type = e.target.name;
        var val = e.target.value;
        
        if (type == 'add'){
          this.setState({add: val});
        }
        else if (type == 'city'){
          this.setState({city: val});
        }
        else if (type == 'state'){
          this.setState({state: val});
        }
        else if (type == 'zip'){
          this.setState({zip: val});
        }        
    }
    render () {
        return (
        <div id="container">
            <Row style={{width:"80%", margins:'auto', border: "1px solid #5B7FDB", padding:"10%", borderRadius: "15px"}}>
                <Input s={12} type="text" placeholder="Address" name='add' onChange={this.handleChange}/>
                <Input s={12} type="text" placeholder="City" name='city'  onChange={this.handleChange}/>
                <Input s={12} type="text" placeholder="State" name='state'  onChange={this.handleChange}/>
                <Input s={12} type="number" placeholder="Zip" name='zip'  min={0} max={99999} onChange={this.handleChange}/>            
                <Button s={12} style={{margins:"auto"}} onClick={this.send}>Send</Button>          
            </Row>
        </div>
        
            
        )
    }
    
}