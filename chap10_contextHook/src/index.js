import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode: Error 있으면 콘솔에 출력해주는 태그
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
