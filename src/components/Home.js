import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import logo from '../assets/logo.png';

export default function Home() {
    return (
        <div className='home'>
            <header>
                <img src={logo} alt='SHELFIE logo' />
                <h1>SHELFIE</h1>
            </header>
            <div className='body'>
                <Link to='/bins/A' style={{textDecoration: 'none'}}>
                    <div className='container'>
                        <span> Shelf A </span>
                    </div>
                </Link>
                <Link to='/bins/B' style={{textDecoration: 'none'}}>
                    <div className='container'>
                        <span> Shelf B </span>
                    </div>
                </Link>
                <Link to='/bins/C' style={{textDecoration: 'none'}}>
                    <div className='container'>
                        <span> Shelf C </span>
                    </div>
                </Link>
                <Link to='/bins/D' style={{textDecoration: 'none'}}>
                    <div className='container'>
                        <span> Shelf D </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}