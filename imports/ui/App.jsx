import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import Record from './Record';
import Map from './Map'
import {Footer} from 'react-materialize';
import {Navbar} from 'react-materialize';

export default class App extends Component
{
    constructor (props) {
        super(props);
        console.log(window.location.pathname)
    }
    render()
    {
        return (
            <BrowserRouter>
                <div>
                    <Navbar brand="Beacon" centerLogo={true}>

                    </Navbar>

                    <div id='main-content' style={{height : "81vh"}}>
                        <Switch>
                            <Route path = '/map' component={() => <Map center={{lat : 32.7767, lng: -96.7970}} zoom={11}/>}/>
                            <Route path = '/record' component = {Record}/>                        
                        </Switch>
                    </div>
                    
                    <Footer>
                        <div>
                            Made by People
                        </div>
                    </Footer>    
                </div>

            </BrowserRouter>
        )
        
    }
}