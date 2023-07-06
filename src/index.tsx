import * as React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Normalize } from './styles';

if (process.env.NODE_ENV === 'development') {
  // Disabled to follow MSW docs: https://mswjs.io/docs/getting-started/integrate/browser
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
