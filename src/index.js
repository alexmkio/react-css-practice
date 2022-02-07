import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import Sass from './components/Sass/Sass';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Sass />
  </React.StrictMode>,
  document.getElementById('root')
);
