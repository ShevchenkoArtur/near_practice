import 'regenerator-runtime/runtime';
import React from 'react';
import './assets/css/global.css';
import {login, logout,} from './assets/js/near/utils';
import getConfig from './assets/js/near/config';
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Navbar />
    );
}

export default App;