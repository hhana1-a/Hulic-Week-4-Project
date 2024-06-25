import React from 'react';
import './Footer.css'; 
import tmdbLogo from '../assets/tmdb_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Powered by:</p>
      <a href="https://www.themoviedb.org" target="_blank">
      <img src={tmdbLogo} alt="tmdb logo" height="50vh" />
      </a>
    </footer>
  );
};

export default Footer;
