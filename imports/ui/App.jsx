import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import Record from './Record';
import Map from './Map'
export default class App extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <div id='main-content' style={{height : "100%"}}>
                    <Switch>
                        <Route path = '/map' Component={() => <Map center={{lat : 32.7767, lng: 96.7970}} zoom={11}/>}/>
                        <Route path = '/record' component = {Record}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
        
    }
}