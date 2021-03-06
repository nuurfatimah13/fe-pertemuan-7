// Lakukan import Navbar, Footer Component
import React from 'react';
import { useState } from 'react';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import Navbar from '../components/Navbar/Navbar';
import data from '../utils/constants/data';

/**
 * Membuat Component Main
 * Untuk menyimpan Component Hero, Movies dan AddMovieForm
 */
function Main() {
  /**
   * Mengangkat state movies ke atas (Home): lifting state
   * dari component Movies ke Home
   */
  const [movies, setMovies] = useState(data);

  // Kirim state sebagai props ke Component Movies dan AddMovieForm
  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  );
}

/**
 * Buat Component Home
 * Untuk menyimpan Navbar, Main, & Footer Component
 */
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

// Lakukan export Home
export default Home;
