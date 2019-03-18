import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Frontload, frontloadServerRender } from 'react-frontload';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '@/common/routes';

const renderer = async (req, store, context) => {
    const content = await frontloadServerRender(() =>
        renderToString(
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    <Frontload isServer={true}>
                        <Routes />
                    </Frontload>
                </StaticRouter>
            </Provider>
        )
    );
    const state = serialize(store.getState());
    const helmet = Helmet.renderStatic();
    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__INIT_STATE__= ${state};      
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};

export default renderer;
