import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './home';
import Login from '../Components/login';
import Register from '../Components/register';
import Search from './search-page';

export default class Routing extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Route path="/register" component={Register}/>
                <Route path="/search/s=:searchWord" component={Search}/>
            </Switch>
        </Router>
    )
  }
}
