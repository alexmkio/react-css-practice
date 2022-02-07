import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BasicConcepts from './components/BasicConcepts/BasicConcepts';

import Sass from './components/Sass/Sass';

ReactDOM.render(
  <React.StrictMode>
    <h1>
      CSS Examples
    </h1>
    <BasicConcepts />
    <Sass />
  </React.StrictMode>,
  document.getElementById('root')
);
