import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './create.css';
import logo from '../assets/logo.png';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: "",
            image: ""
        };
    }

    create() {
        if (window.confirm('Are you sure you want to add this product?')) {
            let changes = {
                "name": this.state.name,
                "price": this.state.price,
                "image": this.state.image
            };
            axios.post(`/api/bin/${this.props.match.params.id}`, changes)
                .then(res => {
                    console.log(res)
                    this.props.history.push(`/bin/${res.data[0].shelf_id + res.data[0].bin_id}`)
                });
        }
        this.setState({name: '', price: "", image: ""});
    }

    render() {
        return (
            <div className='bin'>
                <header>
                    <Link to='/'><img src={logo} alt='SHELFIE logo' /></Link>
                </header>
                <nav>
                    <Link to={`/bins/${this.props.match.params.id[0]}`}><h1> Shelf {this.props.match.params.id[0]} </h1></Link>
                </nav>
                <nav className='nav'>
                    <Link to={`/bin/${this.props.match.params.id[0] + this.props.match.params.id[1]}`}><h1> Bin {this.props.match.params.id[1]} </h1></Link>
                </nav>
                <div className='edit'>
                    <span> Name </span>
                    <br/>
                    <input onChange={(e) => this.setState({name: e.target.value})} />
                    <br/>
                    <span> Price </span>
                    <br/>
                    <input onChange={(e) => this.setState({price: e.target.value})}/>
                    <br/>
                    <span> Image URL </span>
                    <br/>
                    <input onChange={(e) => this.setState({image: e.target.value})}/>
                    <br/>
                    <button onClick={() => this.create()} className='save'><Link to={`/bin/${this.props.match.params.id}`}>+ Add to Inventory</Link></button>
                    <button><Link to={`/bins/${this.props.match.params.id[0]}`} id='cancel'>Cancel</Link></button>
                </div>
            </div>
        );
    }
}
