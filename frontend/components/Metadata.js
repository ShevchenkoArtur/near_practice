import React, {useEffect, useState} from 'react';

const Metadata = () => {
    const [metadata, setMetadata] = useState();

    useEffect(() => {
        (async () => {
            const data = await window.account.state();
            console.log(data);
            setMetadata(data);
        })()
    }, []);

    return (
        <div>
            Metadata
        </div>
    );
};

export default Metadata;