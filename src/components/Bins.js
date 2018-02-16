import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Bins extends Component {
    constructor() {
        super();
        this.state = {
            bins: []
        };
    }

    componentDidMount() {
        axios.get(`/api/bins/${this.props.match.params.id}`).then(res => {
            this.setState({bins: res.data});
        });
    }

    render() {
        this.state.bins.sort((a, b) => a.id > b.id);
        let binButtons = this.state.bins.map((e, i) => {
            if (e.name) {
                return <div key={i}><Link to={`/bin/${e.bin_id}`}><h3> {e.bin_name} </h3></Link></div>;
            } else {
                return <div key={i}><Link to={`/create/${e.bin_id}`}><h3> + Add Inventory to bin </h3></Link></div>;
            }
        });
        return (
            <div>
                <Link to='/'><h1>SHELFIE</h1></Link>
                {binButtons}
            </div>
        );
    }
}