import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Raumo lebt nicht nur es reagiert auch</h1>

ReactDOM.render(
  element,
  document.getElementById('app')
);

module.hot.accept();