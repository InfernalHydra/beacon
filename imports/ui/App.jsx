import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import Map from './Map'

export default class App extends Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div id='main-content'>
                    <Switch>
                        <Route exact path = '/' component = {() => <Map center={{lat : 32.7767, lng: 96.7970}} zoom={11}/>}/>
                        <Route path = '/record' component = {() => <Map center={{lat : 32.7767, lng: 96.7970}} zoom={11}/>}/>
                        <Route path = '/map' component = {() => <Map center={{lat : 32.7767, lng: 96.7970}} zoom={11}/>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}