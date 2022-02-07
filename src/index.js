import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BasicConcepts from './components/BasicConcepts/BasicConcepts';
import Selectors from './components/Selectors/Selectors';
import PsuedoElements from './components/PsuedoElements/PsuedoElements';
import PsuedoClasses from './components/PsuedoClasses/PsuedoClasses';

import Sass from './components/Sass/Sass';

ReactDOM.render(
  <React.StrictMode>
    <h1>
      CSS Examples
    </h1>
    <BasicConcepts />
    <Selectors />
    <PsuedoElements />
    <PsuedoClasses />
    <Sass />
  </React.StrictMode>,
  document.getElementById('root')
);
