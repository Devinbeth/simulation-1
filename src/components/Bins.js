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
        this.state.bins.sort((a, b) => a.bin_id > b.bin_id);
        let binButtons = this.state.bins.map((e, i) => {
            if (e.name) {
                return (
                    <Link to={`/bin/${e.shelf_id}${e.bin_id}`} key={i}>
                        <div className='container'>
                            <span> Bin {e.shelf_id}{e.bin_id} </span>
                        </div>
                    </Link>
                );
            } else {
                return (
                    <Link to={`/create/${e.shelf_id}${e.bin_id}`} key={i}>
                        <div className='container'>
                            <span> + Add Inventory to bin </span>
                        </div>
                    </Link>
                );
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