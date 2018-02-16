import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>SHELFIE</h1>
            <nav>
                <Link to='/bins/A'><h3>Shelf A</h3></Link>
                <Link to='/bins/B'><h3>Shelf B</h3></Link>
                <Link to='/bins/C'><h3>Shelf C</h3></Link>
                <Link to='/bins/D'><h3>Shelf D</h3></Link>
            </nav>
        </div>
    );
}