import './App.css'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'

//VIEWS
import HomeView from './views/HomeView'
import PortfolioView from './views/PortfolioView'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="portfolio" element={<PortfolioView />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App