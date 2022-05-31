import 'regenerator-runtime/runtime';
import React from 'react';
import './assets/css/global.css';
import Navbar from "./components/Navbar";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {login} from "./assets/js/near/utils";
import Metadata from "./components/Metadata";

const App = () => {
    return (
        <>
            <Navbar/>
            <Box>
                {window.accountId
                    ?
                    <Box mt={3}>
                        <Box>
                            <Metadata />
                        </Box>
                        <Typography align='center'>Send Token Out</Typography>
                        <Typography align='center'>Active keys</Typography>
                    </Box>
                    :
                    <Box mt={3}>
                        <Typography align='center'>Please, login, otherwise app will not work!</Typography>
                        <Box display='flex'>
                            <Button
                                variant='contained'
                                style={{margin: '16px auto'}}
                                onClick={login}
                            >
                                Login
                            </Button>
                        </Box>
                    </Box>}
            </Box>
        </>
    );
}

export default App;