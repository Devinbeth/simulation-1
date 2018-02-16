import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0
        };
    }

    update() {
        if (window.confirm('Are you sure you want to update this product?')) {
            let changes = {
                "name": this.state.name || this.state.bin.name,
                "price": this.state.price || this.state.bin.price
            };
            axios.put(`/api/bin/${this.props.match.params.id}`, changes).then(res => {
                this.setState({bin: res.data});
            });
        }
        this.setState({editBool: false});
    }

    render() {
        return (
            <div>
                <Link to='/'><h1>SHELFIE</h1></Link>
                <span> Name </span>
                <br/>
                <input />
                <br/>
                <span> Price </span>
                <br/>
                <input />
                <br/>
                <button onClick={() => this.setState({editBool: true})}>+ Add to Inventory</button>
                <Link to={`/bins/${this.props.match.params.id[0]}`}><button>Cancel</button></Link>
            </div>
        );
    }
}