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
                <Link to='/bins/A'>
                    <div className='container'>
                        <span className='button'> Shelf A </span>
                    </div>
                </Link>
                <Link to='/bins/B'>
                    <div className='container'>
                        <span className='button'> Shelf B </span>
                    </div>
                </Link>
                <Link to='/bins/C'>
                    <div className='container'>
                        <span className='button'> Shelf C </span>
                    </div>
                </Link>
                <Link to='/bins/D'>
                    <div className='container'>
                        <span className='button'> Shelf D </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}