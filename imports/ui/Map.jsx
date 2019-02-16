import React, {Component} from 'react'
import {withTracker} from 'meteor/react-meteor-data'
import GoogleMapReact from 'google-map-react'
import { Meteor } from 'meteor/meteor';
import Points from '../api/Points'


const pick = (...props) => o => props.reduce((a, e) => ({ ...a, [e]: o[e] }), {});

class Map extends Component
{
    render()
    {
        if(!this.props.isReady)
        {
            return <div>loading...</div>
        }
        var payload = {
            positions : this.props.points.map(pick('lat', 'lng')),
            options: {   
                radius: 20,   
                opacity: 0.6
            }
        };
        //console.log(this.props.points.map(pick('lat', 'lng')));
        return(
            <div id="map-container" style={{height : "500px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key : "AIzaSyDwycw2h_XzL94n0bSXRxbXX8rrSXOaD3w"}}
                    defaultCenter = {this.props.center}
                    defaultZoom = {this.props.zoom}
                    heatmapLibrary = {true}
                    heatmap = {payload}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default withTracker(() => {
    const subscription = Meteor.subscribe('points');
    return ({
        isReady : subscription.ready(),
        points : Points.find({}).fetch()
    })
})(Map);