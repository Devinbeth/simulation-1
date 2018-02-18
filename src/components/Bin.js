import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './bin.css';
import logo from '../assets/logo.png';

export default class Bin extends Component {
    constructor() {
        super();
        this.state = {
            bin: [],
            editBool: false,
            name: null,
            price: null,
            image: null
        };
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.fields = this.fields.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/bin/${this.props.match.params.id}`).then(res => {
            this.setState({bin: res.data});
        });
    }

    update() {
        if (window.confirm('Are you sure you want to update this product?')) {
            let changes = {
                "name": this.state.name || this.state.bin.name,
                "price": this.state.price || this.state.bin.price,
                "image": this.state.image || this.state.bin.image
            };
            axios.put(`/api/bin/${this.props.match.params.id}`, changes).then(res => {
                this.setState({bin: res.data});
            });
        }
        this.setState({
            editBool: false,
            name: null,
            price: null,
            image: null
        });
    }

    remove() {
        if (window.confirm('Are you sure you want to delete this product?')) {
            axios.delete(`/api/bin/${this.props.match.params.id}`).then(res => {
                this.setState({bin: res.data});
            });
        }
        this.setState({
            editBool: false,
            name: null,
            price: null,
            image: null
        });
    }

    fields() {
        if (this.state.bin.length > 0 && this.state.editBool === false) {
            return (
                <div className='edit'>
                    <img src={this.state.bin[0].image} alt={this.state.bin[0].name}/>
                    <span> Name </span>
                    <br/>
                    <input type="text" value={this.state.bin[0].name} readOnly/>
                    <br/>
                    <span> Price </span>
                    <br/>
                    <input type="text" value={`$${this.state.bin[0].price}`} readOnly/>
                    <br/>
                    <span> Image URL </span>
                    <br/>
                    <input type="text" value={this.state.bin[0].image} readOnly/>
                    <br/>
                    <button onClick={() => this.setState({editBool: true})}>EDIT</button>
                    <button onClick={() => this.remove()}>DELETE</button>
                </div>
            );
        }
        else if (this.state.bin.length > 0 && this.state.editBool === true) {
            return (
                <div className='edit'>
                    <img src={this.state.bin[0].image} alt={this.state.bin[0].name}/>
                    <span> Name </span>
                    <br/>
                    <input onChange={(e) => this.setState({name: e.target.value})}/>
                    <br/>
                    <span> Price </span>
                    <br/>
                    <input onChange={(e) => this.setState({price: e.target.value})}/>
                    <br/>
                    <span> Image URL </span>
                    <br/>
                    <input onChange={(e) => this.setState({image: e.target.value})}/>
                    <br/>
                    <button onClick={() =>  this.setState({editBool: false, name: null, price: null, image: null})}>CANCEL</button>
                    <button onClick={() => this.update()} className='save'>SAVE</button>
                </div>
            );
        }
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
                {this.fields()}
            </div>
        );
    }
}