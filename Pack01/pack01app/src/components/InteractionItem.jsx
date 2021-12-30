import React from 'react'

    const InteractionItem = ({id, full_name}) => (
    <li key={id}>{full_name}</li>
)

export default InteractionItem