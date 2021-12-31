import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getFiles } from '../API/DataHandling'
function DataEnvironment() {
    const [dataOutput, setDataOutput] = useState({});
    let historyItem = useHistory();
    const { owner, name } = useParams();

    useEffect(() => {
        getFiles(owner, name)
            .then(data => setDataOutput(data));
    }, [])
    return (
        <>
            <button onClick={() => history.goBack()}>Go back</button>
            <h2>{dataOutput.name}</h2>
        </>
    )
}

export default DataEnvironment;