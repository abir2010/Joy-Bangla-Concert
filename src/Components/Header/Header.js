import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="nav-part">
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/information">Information</a>
                <a href="/about">About</a>
            </div>
            <div className="mb-4">
                <h1>Joy Bangla <span className="text-danger">Concert</span> 2021</h1>
                <p>For the 11th time in history, we are arranging the big music festival, the Joy Bangla Concert in Bangladesh <br /> So guys get ready for the biggest music fest of Bangladesh on 31st December, book your tickets now!</p> <button className="btn btn-danger">Book tickets here</button>
            </div>
            <div class="d-flex input-field">
                <input className="form-control me-2" type="search" placeholder="Search your favourite band" aria-label="Search" />
                <button className="btn btn-outline-danger" type="submit">Search</button>
            </div>
        </div>
    );
};

export default Header;