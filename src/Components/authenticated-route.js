import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect } from 'react-router-dom';



const AuthenticatedRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={props =>(isAuthenticated === true ? <Component {...props}/> : <Redirect to="/login"/>)}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: state.user !==undefined
})

export default connect(mapStateToProps)(AuthenticatedRoute);
