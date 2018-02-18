import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './bins.css';
import logo from '../assets/logo.png';

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
                            <span> Bin {e.bin_id} </span>
                        </div>
                    </Link>
                );
            } else {
                return (
                    <Link to={`/create/${e.shelf_id}${e.bin_id}`} key={i}>
                        <div className='container' id='add'>
                            <span> + Add Inventory to bin </span>
                        </div>
                    </Link>
                );
            }
        });
        return (
            <div className='bins'>
                <header>
                    <Link to='/'><img src={logo} alt='SHELFIE logo' /></Link>
                </header>
                <nav>
                    <Link to={`/bins/${this.props.match.params.id}`}><h1> Shelf {this.props.match.params.id} </h1></Link>
                </nav>
                <div className='body'>
                    {binButtons}
                </div>
            </div>
        );
    }
}