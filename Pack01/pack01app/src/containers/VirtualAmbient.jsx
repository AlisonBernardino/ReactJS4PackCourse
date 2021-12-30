import React, { useState, useEffect } from 'react';
import { listOwners } from '../API/DataHandling'
import InteractionItem from '../components/InteractionItem'

function VirtualAmbient() {
    const [data, setData] = useState([]);

    useEffect(() => {
        listOwners()
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <ul>
            {data.map(item => <InteractionItem key={item.id} {...item} />)}
        </ul>
    )
};