import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './container/App';
import history from './histoty';
import { Provider } from 'react-redux';
import store from './redux/store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
