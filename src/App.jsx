import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import QuizPage from './Pages/Quiz';
import Ques from './Pages/Ques';
import Review from './Pages/Review';
import Login from './Pages/Login';
import Layout from './Layout';
import NewsSection from './Pages/News';
import Unesco from './Pages/Unesco';
import IndiaMap from './components/InteractiveIndiaMap';
import SignUp from './Pages/SignUp';
import StateInfo from './Pages/StateInfo';
import StateMCQ from './components/StateMCQ';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/india-map' element={<PrivateRoute><IndiaMap /></PrivateRoute>} />
          <Route path='/state/:id' element={<StateInfo />} />
          <Route path='/quiz/:id' element={<StateMCQ />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/reviews' element={<Review />} />
            <Route path='/news' element={<NewsSection />} />
            <Route path='/ques' element={<Ques />} />
            <Route path='/unesco' element={<Unesco />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} /> {/* Wildcard route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;