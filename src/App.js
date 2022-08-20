import './App.css'
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'

//COMPONENTS
import Header from './components/Header'
import Bio from "./components/Bio"
import Footer from "./components/Footer"
import MenuBar from './components/MenuBar'

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