import React, {useEffect, useState} from 'react';
import {Box, Button, Input, Typography} from "@mui/material";

const SendTokens = () => {
    const [recipients, setRecipients] = useState([]);
    const [valuesSent, setValuesSent] = useState([]);
    const [balance, setBalance] = useState(0);
    const [recipient, setRecipient] = useState('');
    const [valueInput, setValueInput] = useState('');

    useEffect(() => {
        (async () => {
            const recipients = await window.contract.getNames({user: window.accountId});
            const values = await window.contract.getValues({user: window.accountId});
            setRecipients(recipients);
            setValuesSent(values);
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const { amount } = await window.account.state();
            setBalance(Number(window.utils.format.formatNearAmount(amount)));
        })()
    }, [balance]);

    const send = async () => {
        let getState = await window.account.state();
        let getAmount = window.utils.format.formatNearAmount(getState.amount);
        console.log(getAmount);
        console.log(valueInput);
        if (Number(getAmount) > Number(valueInput)) {
            await window.account.sendMoney(recipient, window.utils.format.parseNearAmount(valueInput));
            await window.contract.addFunds({recipient, amount: Number(valueInput)});
            await window.contract.getNames({user: window.accountId});
            await window.contract.getValues({user: window.accountId});
        } else {
            alert('Not enough funds')
        }
    };

    return (
        <Box mt={3} ml={3}>
            <Typography variant='h3'>Send Tokens</Typography>
            <Typography>Near Token Balance - {balance}</Typography>
            <Typography>Near Tokens</Typography>
            <Box mt={2}>
                <Typography>Send Money to friend</Typography>
                <Input
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder='Enter recipient'
                />
                <Input
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                    placeholder='Enter value'
                />
                <Button onClick={send}>Submit</Button>
            </Box>
            <Box mt={2}>
                <Typography>Transaction history</Typography>
                {
                    recipients.map((el, i) => <Typography key={el}>{el} - {valuesSent[i]} NEAR</Typography>)
                }
            </Box>
        </Box>
    );
};

export default SendTokens;