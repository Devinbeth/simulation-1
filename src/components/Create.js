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

    create() {
        if (window.confirm('Are you sure you want to add this product?')) {
            let changes = {
                "name": this.state.name,
                "price": this.state.price
            };
            axios.post(`/api/bin/${this.props.match.params.id}`, changes).then();
        }
        this.setState({name: '', price: 0});
    }

    render() {
        return (
            <div>
                <Link to='/'><h1>SHELFIE</h1></Link>
                <Link to={`/bins/${this.props.match.params.id[0]}`}><h3>Shelf {this.props.match.params.id[0]}</h3></Link>
                <span> Name </span>
                <br/>
                <input onChange={(e) => this.setState({name: e.target.value})} />
                <br/>
                <span> Price </span>
                <br/>
                <input onChange={(e) => this.setState({price: e.target.value})}/>
                <br/>
                <button onClick={() => this.create()}>+ Add to Inventory</button>
                <Link to={`/bins/${this.props.match.params.id[0]}`}><button>Cancel</button></Link>
            </div>
        );
    }
}
