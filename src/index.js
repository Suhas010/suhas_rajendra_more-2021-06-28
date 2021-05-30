import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/theme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider>
    <Home />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
