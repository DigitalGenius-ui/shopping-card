import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/Context';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider initialState={initialState} reducer={reducer}>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

