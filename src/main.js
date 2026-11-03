import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './app';

ReactDOM.createRoot(document.getElementById('app')).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);
