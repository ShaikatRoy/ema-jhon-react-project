import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a herf="/shop">shop</a>
                <a herf="/order">order</a>
                <a herf="/inventory">inventory</a>
                <a herf="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;