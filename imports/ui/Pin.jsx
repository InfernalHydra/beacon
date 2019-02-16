import React, {Component} from 'react'
import Geocode from 'react-geocode'
const ReactSVG = require('react-svg')


const WIDTH = 20;
const HEIGHT = 39;
const pinStyle = {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    left: -WIDTH / 2,
    top: -HEIGHT / 2,
  
    textAlign: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
}

async function coordsToAddress(lat, lng)
{
    Geocode.setApiKey("AIzaSyDwycw2h_XzL94n0bSXRxbXX8rrSXOaD3w");
    Geocode.enableDebug();
    let promise = Geocode.fromLatLng(String(lat), String(lng));
    // let data = await promise;
    // let address = data[0].formatted_address;
    // console.log(address);
    // return address;
} 
coordsToAddress(32.8359936, -97.3160448);
export default class Pin extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            viewText : false
        }
    }
    render()
    {
        return (
            <div id='pin-container' style = {pinStyle} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut = {this.handleMouseOut.bind(this)}>
                 <ReactSVG src='/pin.svg' />
                {/* {this.state.viewText && <div>{coordsToAddress(this.props.lat, this.props.lng)}</div>} */}
            </div>
        );
    }
    handleMouseOut()
    {
        this.setState({viewText : false});
    }
    handleMouseOver()
    {
        this.setState({viewText : true});
    }
}