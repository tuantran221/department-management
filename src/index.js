import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SnackbarProvider} from "notistack"

ReactDOM.render(
  <React.StrictMode>
   <SnackbarProvider maxSnack={2}
   autoHideDuration={500}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',  
      
  }}
  className="rendererror"
 >
    <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
