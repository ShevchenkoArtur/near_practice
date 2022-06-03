import React from 'react';
import App from './App';
import {initContract} from "./utils";
import * as ReactDOM from "react-dom";

(async () => {
    const {contract, currentUser, nearConfig, walletConnection} = await initContract();
    ReactDOM.render(
        <App
            contract={contract}
            currentUser={currentUser}
            nearConfig={nearConfig}
            wallet={walletConnection}
        />,
        document.getElementById('root')
    );
})()
