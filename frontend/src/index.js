import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import {initContract} from "./utils";

initContract()
    .then(({contract, currentUser, nearConfig, walletConnection}) => {
        const container = document.getElementById('root');
        const root = createRoot(container);
        root.render(
            <App
                contract={contract}
                currentUser={currentUser}
                nearConfig={nearConfig}
                wallet={walletConnection}
        />
        );
    })
