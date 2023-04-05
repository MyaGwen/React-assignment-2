import React from 'react';
import Navbar from './components/Navbar';
import AppIcon from './components/AppIcon';
import SearchSection from './components/SearchSection';
import Buttons from './components/Buttons';
import Languages from './components/Language';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-section">
        <AppIcon />
        <SearchSection />
        <Buttons />
        <Languages />
      </div>
      <Footer />
    </div>
  );
}

export default App;
