import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom'

export default class App extends Component
{
    render()
    {
        <BrowserRouter>
            <div id='main-content'>
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route path = '/record' component = {Record}/>
                    <Route path = '/map' component = {Map} />
                </Switch>
            </div>
        </BrowserRouter>
    }
}