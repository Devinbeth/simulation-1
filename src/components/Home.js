import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            shelves: []
        };
    }

    componentDidMount() {
        axios.get('/api/bins').then(res => this.setState({shelves: res.data}));
    }

    render() {
        let shelfButtons = this.state.shelves.map((e, i) => {
            return <div key={i}><Link to=''>{e.name}</Link></div>
        });
        return (
            <div>
                <h1>SHELFIE</h1>
                {shelfButtons}
            </div>
        );
    }
}