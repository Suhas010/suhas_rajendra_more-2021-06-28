import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/theme';

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider>
    <Home />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
