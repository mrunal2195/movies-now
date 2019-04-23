import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
import Login from '../Components/login';
import Register from '../Components/register';
import Search from './search-page';
import Navbar from '../Components/navbar'
import profile from '../Components/profile';
import MovieDetails from './moviedetails';
import Likedmovies from './likedmovies';
import Report from './reports';
import  AuthenticatedRoute from '../Components/authenticated-route';
import UserProfile from '../Components/userProfile';

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>
                        )}/>
                        <Route path='/home' component={Home} />
                        <Route path='/login' component={Login} />
                        <AuthenticatedRoute exact path='/profile' component={profile} />
                        <Route path="/register" component={Register} />
                        <Route path="/search/:searchWord" component={Search} />
                        <Route path="/profile/:id" component={UserProfile}/>
                        <Route path="/movieDetails/movie/:imdbid" component={MovieDetails}/>
                        <AuthenticatedRoute path="/favouritemovies" component={Likedmovies}/>
                        <AuthenticatedRoute path="/reports" component={Report}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
