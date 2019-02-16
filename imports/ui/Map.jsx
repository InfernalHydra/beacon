import React, {Component} from 'react'
import {withTracker} from 'meteor/react-meteor-data'
import GoogleMapReact from 'google-map-react'

export default class Map extends Component
{
    render()
    {
        return(
            <div id="map-container" style={{height : "500px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key : "AIzaSyDwycw2h_XzL94n0bSXRxbXX8rrSXOaD3w"}}
                    defaultCenter = {this.props.center}
                    defaultZoom = {this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

// export default withTracker(() => {

// })