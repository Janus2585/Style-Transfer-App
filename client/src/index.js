import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware());
ReactDOM.render(
	//Provider is a component that reads changes from redux store. It informs all its children components when the state updates
	<Provider store={store}><App /></Provider>, 
	document.getElementById('root'));
registerServiceWorker();
