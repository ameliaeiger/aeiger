import React from 'react'

//COMPONENTS
import Header from '../components/Header'
import Footer from "../components/Footer"
import MenuBar from '../components/MenuBar'
import Portfolio from '../components/Portfolio'

const PortfolioView = () => {
  return (
    <>
        <MenuBar />
        <Header />
        <Portfolio />
        <Footer />
    </>
  )
}

export default PortfolioView