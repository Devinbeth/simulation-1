import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Bin extends Component {
    constructor() {
        super();
        this.state = {
            bin: [],
            editBool: false,
            name: '',
            price: 0
        };
        this.fields = this.fields.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
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
                "price": this.state.price || this.state.bin.price
            };
            axios.put(`/api/bin/${this.props.match.params.id}`, changes).then(res => {
                this.setState({bin: res.data});
            });
        }
        this.setState({editBool: false});
    }

    remove() {
        if (window.confirm('Are you sure you want to delete this product?')) {
            axios.delete(`/api/bin/${this.props.match.params.id}`).then(res => {
                this.setState({bin: res.data});
            });
        }
    }

    fields() {
        if (this.state.bin.length > 0 && this.state.editBool === false) {
            return (
                <div>
                    <img alt=''/>
                    <span> Name </span>
                    <br/>
                    <input type="text" value={this.state.bin[0].name} readOnly/>
                    <br/>
                    <span> Price </span>
                    <br/>
                    <input type="text" value={this.state.bin[0].price} readOnly/>
                    <br/>
                    <button onClick={() => this.setState({editBool: true})}>Edit</button>
                    <button onClick={() => this.remove()}>Delete</button>
                </div>
            );
        }
        else if (this.state.bin.length > 0 && this.state.editBool === true) {
            return (
                <div>
                    <img alt=''/>
                    <span> Name </span>
                    <br/>
                    <input onChange={(e) => this.setState({name: e.target.value})}/>
                    <br/>
                    <span> Price </span>
                    <br/>
                    <input onChange={(e) => this.setState({price: e.target.value})}/>
                    <br/>
                    <button onClick={() => this.setState({editBool: false})}>Cancel</button>
                    <button onClick={() => this.update()}>Save</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Link to='/'><h1>SHELFIE</h1></Link>
                <Link to={`/bins/${this.props.match.params.id[0]}`}><h3>Shelf {this.props.match.params.id[0]}</h3></Link>
                {this.fields()}
            </div>
        );
    }
}