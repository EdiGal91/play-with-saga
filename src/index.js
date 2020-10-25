import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import { reducer } from './store/reducers';
import { sagaWatcher } from './store/sagas';

const sagaMiddleware = createSagaMiddleware()


const devToolExt = window.__REDUX_DEVTOOLS_EXTENSION__;
const devTool = devToolExt && devToolExt ();
const thunkMiddleware = applyMiddleware(thunk, sagaMiddleware);

const store = createStore(reducer, compose(thunkMiddleware, devTool));
sagaMiddleware.run(sagaWatcher)
render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
