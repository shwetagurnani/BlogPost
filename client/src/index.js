import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Collection } from "mongoose";

const options = {
    position: 'top center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
      
  }

  const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  )
  
  render(<Root />, document.getElementById('root'))  

serviceWorker.unregister();
