import React, { Component } from 'react';
import { listOwners } from '../API/DataHandling'
import InteractionItem from '../components/InteractionItem'

class VirtualAmbient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        listOwners().then(data => {
            this.setState({ data })
        })
    }

    render() {
        const { data } = this.state

        return (
            <ul>
                {data.map(item => <InteractionItem key={item.id} {...item} />)}
            </ul>
        )
    }
}

export default VirtualAmbient;