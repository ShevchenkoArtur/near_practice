import React, {useState} from 'react';
import {Box} from "@mui/material";

const SendTokens = () => {
    const [recipients, setRecipients] = useState([]);
    const [valuesSent, setValuesSent] = useState([]);
    const [balance, setBalance] = useState(0);

    return (
        <Box>
            SendTokens
        </Box>
    );
};

export default SendTokens;