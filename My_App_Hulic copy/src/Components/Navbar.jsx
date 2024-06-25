import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import app_logo from '../assets/app_logo.ico';
const Navbar = () => {
  return (
    <nav className='nav_css'>
    <div className='main_logo_container'> <img src={app_logo} alt="Logo" className="logo" /><Link to='/'><p> Movie app</p></Link></div>
    <Link to='/'>Home</Link>
    <Link to ='/favorites'>Favorites</Link>
    </nav>
  )
}

export default Navbar;
