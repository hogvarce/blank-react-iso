import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Frontload } from 'react-frontload';
import Routes from '@/common/routes';
import createStore from '@/common/createStore';

const initialState = window.__INIT_STATE__ || {};
delete window.__INIT_STATE__;

const axiosIstant = axios.create({
    baseURL: '/api',
});

const store = createStore(initialState, axiosIstant);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Frontload noServerRender={true}>
                <Routes />
            </Frontload>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
