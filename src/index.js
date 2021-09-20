import React from 'react';
import ReactDOM from 'react-dom';

// ROUTER
import App from 'router/App.router'
// CSS
import 'primeflex/primeflex.min.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'styles/style.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

