import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
// import Main from './Main';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
