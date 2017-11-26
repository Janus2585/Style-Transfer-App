import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import './bootstrap/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
import './materialize-css/dist/css/materialize.min.css'//since there is no relative path here, webpack asssumes this is a node module
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
	//Provider is a component that reads changes from redux store. It informs all its children components when the state updates
	<Provider store={store}><App /></Provider>, 
	document.getElementById('root'));
registerServiceWorker();
