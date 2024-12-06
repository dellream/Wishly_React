/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import dotenv from 'dotenv';

import store from './store';
// import 'styles/base.scss';

import App from './app';

dotenv.config();

function init() {
    const container = document.querySelector('#root');

    if (container) {
        const root = createRoot(container);

        root.render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    } else {
        throw Error('Target container is not a DOM element.');
    }
}

init();
