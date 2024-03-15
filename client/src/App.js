import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import './App.css';

// import pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className="w-full mx-auto max-w-7xl bg-white px-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
