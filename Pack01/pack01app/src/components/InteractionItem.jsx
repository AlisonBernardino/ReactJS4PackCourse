import React from 'react'
import { Link } from 'react-router-dom';

const InteractionItem = ({ id, full_name }) => (
    <li key={id}><Link to={`/repos/${login}/${name}`}>{full_name}</Link></li>
)

export default InteractionItem