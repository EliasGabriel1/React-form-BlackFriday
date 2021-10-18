import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reset from './generic/Reset';
import Base from "./styles/elements/Base"

ReactDOM.render(
  <React.StrictMode>
    <Base/>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
