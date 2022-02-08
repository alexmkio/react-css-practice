import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BasicConcepts from './components/BasicConcepts/BasicConcepts';
import Selectors from './components/Selectors/Selectors';
import PsuedoElements from './components/PsuedoElements/PsuedoElements';
import PsuedoClasses from './components/PsuedoClasses/PsuedoClasses';
import Transform from './components/Transform/Transform';
import Math from './components/Math/Math';
import Filter from './components/Filter/Filter';
import Image from './components/Image/Image';
import Counter from './components/Counter/Counter';
import Sass from './components/Sass/Sass';

ReactDOM.render(
  <React.StrictMode>
    <h1>
      CSS Examples
    </h1>
    <ul>
      <li><a href='#basic_concepts'>Basic Concepts</a></li>
      <li><a href='#selectors'>Selectors</a></li>
      <li><a href='#psuedo_elements'>Psuedo-Elements</a></li>
      <li><a href='#psuedo_classes'>Psuedo-Classes</a></li>
      <li><a href='#transform_functions'>Transform Functions</a></li>
      <li><a href='#math_functions'>Math Functions</a></li>
      <li><a href='#filter_functions'>Filter Functions</a></li>
      <li><a href='#image_functions'>Image Functions</a></li>
      <li><a href='#counter_functions'>Counter Functions</a></li>
      <li><a href='#sass'>Sass</a></li>
    </ul>
    <BasicConcepts />
    <Selectors />
    <PsuedoElements />
    <PsuedoClasses />
    <Transform />
    <Math />
    <Filter />
    <Image />
    <Counter />
    <Sass />
  </React.StrictMode>,
  document.getElementById('root')
);
