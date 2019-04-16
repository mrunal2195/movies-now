import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from '../Components/login';
import Register from '../Components/register';
import Search from './search-page';
import Navbar from '../Components/navbar'
import profile from '../Components/profile';

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/profile' component={profile} />
                        <Route path="/register" component={Register} />
                        <Route path="/search/s=:searchWord" component={Search} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
