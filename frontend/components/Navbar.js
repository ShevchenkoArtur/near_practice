import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {login, logout} from "../assets/js/near/utils";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Basic App
                    </Typography>
                    <Button
                        onClick={window.accountId ? logout : login}
                        color="inherit"
                    >
                        {window.accountId ? window.accountId : 'Login'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;