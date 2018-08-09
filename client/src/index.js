import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {checkAuth} from './utils/check-auth';

const heartbeatInterval = 1000 * 10; // in milliseconds
setInterval(checkAuth, heartbeatInterval);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();