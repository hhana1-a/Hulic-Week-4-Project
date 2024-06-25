import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import FavoritesPage from './Components/FavoritesPage'; 
import MovieDetail from './Components/MovieDetail';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;