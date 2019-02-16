import React, {Component} from 'react';
import {geolocated} from 'react-geolocated';

class Button extends Component {
    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);


    }
    onClick () {        
        
        console.log(this.props.coords['latitude'])
        console.log(this.props.coords['longitude'])

        //Meteor.call()
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