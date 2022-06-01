import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";

const Metadata = () => {
    const [metadata, setMetadata] = useState({});

    useEffect(() => {
        (async () => {
            const data = await window.account.state();
            setMetadata(data);
        })()
    }, []);

    return (
        <Box ml={3}>
            <Typography variant='h3'>Meta Data</Typography>
            <Typography>Amount - {metadata?.amount}</Typography>
            <Typography>Block hash - {metadata?.block_hash}</Typography>
            <Typography>Block height - {metadata?.block_height}</Typography>
            <Typography>Code hash - {metadata?.code_hash}</Typography>
            <Typography>Locked - {metadata?.locked}</Typography>
            <Typography>Storage paid at - {metadata?.storage_paid_at}</Typography>
            <Typography>Storage usage - {metadata?.storage_usage}</Typography>
        </Box>
    );
};

export default Metadata;