import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from '../src/Containers/routing';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/Reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(
    Reducer,
    { movies: [],  status: false },
    enhancer
);

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
