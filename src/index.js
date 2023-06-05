import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/index';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


