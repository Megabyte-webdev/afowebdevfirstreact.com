import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Layout/MainPage'
import NoPageFound from './Pages/NoPageFound'
import HomePage from './Pages/HomePage'
import ProgramPage from './Pages/ProgramPage'
import AboutUsPage from './Pages/AboutUsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route index element={<HomePage />} />
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App