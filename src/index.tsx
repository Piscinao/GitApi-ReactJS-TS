import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // Tratativa de erros
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // Arvore de elementos
  document.getElementById('root')
);

