import React, {Component} from 'react';
import {geolocated} from 'react-geolocated';
import { Meteor } from 'meteor/meteor';
import GoogleMapReact from 'google-map-react'

class Button extends Component {
    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);


    }
    onClick () {        
        let lat = this.props.coords['latitude'];
        let long = this.props.coords['longitude'];        
        Meteor.call('points.add', lat, long, (err) =>{
            if(err)
            {
                alert(err);
            }            
        });
    }
    render() {
        if (!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled) {
            return (<div>
                Manual
            </div>)
        }
        
        if (!this.props.coords) {
            return <div>
                Loading Coordinates
            </div>
        }
        else {
            return (
                <div>
                    <button onClick={this.onClick}>Click ME</button>
                </div>
            )
        }
        
    }
}
export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Button);