import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Unesco from './Pages/Unesco';
import Login from './Pages/Login';
import News from './Pages/News';
import Review from './components/Review';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/unesco" element={<Unesco />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
