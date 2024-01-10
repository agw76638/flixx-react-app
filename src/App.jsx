import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layout/Header';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
