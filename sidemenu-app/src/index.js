import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { Provider } from "react-redux";
import createStoreWithMiddleware from './utils/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
