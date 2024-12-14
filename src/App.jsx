import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import QuizPage from './Pages/Quiz'
import Ques from './Pages/Ques'
import Review from './Pages/Review'
import Login from './Pages/Login'
import Layout from './Layout'
import NewsSection from './Pages/News'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/reviews' element={<Review />} />
            <Route path='/news' element={<NewsSection />} />
            <Route path='/login' element={<Login />} />
            <Route path='/ques' element={<Ques />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App