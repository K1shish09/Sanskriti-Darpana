import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Route path='/' element={<Intro />} /> */}
          {/* <Route path='/' element={<IndiaMap />} /> */}
          <Route path="/state/:id" element={<PrivateRoute><StateInfo /></PrivateRoute>} />
          <Route path='/quiz/:id' element={<PrivateRoute><StateMCQ /></PrivateRoute>} />

          <Route element={<Layout />}>
            <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='/about' element={<PrivateRoute><AboutUs /></PrivateRoute>} />
            <Route path='/quiz' element={<PrivateRoute><QuizPage /></PrivateRoute>} />
            <Route path='/reviews' element={<PrivateRoute><Review /></PrivateRoute>} />
            <Route path='/news' element={<PrivateRoute><NewsSection /></PrivateRoute>} />
            <Route path='/ques' element={<PrivateRoute><Ques /></PrivateRoute>} />
            <Route path='/unesco' element={<PrivateRoute><Unesco /></PrivateRoute>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;