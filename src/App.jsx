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
import Unesco from './Pages/Unesco'
// import Intro from './Pages/Intro'
import IndiaMap from './components/InteractiveIndiaMap'
import SignUp from './Pages/SignUp'
import StateInfo from './Pages/StateInfo'

const App = () => {
  return (
    <Router>
      <Routes>


        {/* <Route path='/' element={<Intro />} /> */}

        <Route path='/' element={<IndiaMap />} />
        <Route path="/state/:id" element={<StateInfo />} />

        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<AboutUs />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/reviews' element={<Review />} />
          <Route path='/news' element={<NewsSection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/ques' element={<Ques />} />
          <Route path='/unesco' element={<Unesco />} />


        </Route>
      </Routes>
    </Router>
  )

}
export default App