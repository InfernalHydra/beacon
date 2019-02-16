import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import Record from './Record';
export default class App extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <div id='main-content'>
                    <Switch>
                        
                        <Route path = '/record' component = {Record}/>
                        
                    </Switch>
                </div>
            </BrowserRouter>
        )
        
    }
}