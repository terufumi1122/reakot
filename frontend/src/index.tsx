import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Parents from './components/Parents';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Parents />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
