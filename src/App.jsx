import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Header from './components/layout/Header';
import { useState } from 'react';
import './App.css';
import { TmdbProvider } from './context/tmdb/TmdbContext.jsx';
import SearchResults from './pages/SearchResults.jsx';

function App() {
  return (
    <TmdbProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<SearchResults />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </TmdbProvider>
  );
}

export default App;
