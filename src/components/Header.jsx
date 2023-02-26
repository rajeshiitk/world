import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='navbar'>

            <div className="left">
                <i class="fa-solid fa-bars"></i>
                <img src={logo} alt="" />

            </div>
            <div className="mid">
            <Link to={"/contact"}>Services</Link>
            <Link to={"/contact"}>industries</Link>
            <Link to={"/contact"}>Associates</Link>
            <Link to={"/contact"}>About Us</Link>
            <Link to={"/contact"}>W-insights</Link>
            <Link to={"/contact"}>Contact Us</Link>
            </div>

            <div className="right">
            <button type='button'>Request offer</button>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Header