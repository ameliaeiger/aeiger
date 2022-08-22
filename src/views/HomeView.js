import React from 'react'

//COMPONENTS
import Header from '../components/Header'
import Bio from "../components/Bio"
import Footer from "../components/Footer"
import MenuBar from '../components/MenuBar'

const HomeView = () => {
        
  return (
    <>
        <MenuBar />
        <Header />
        <Bio />
        <Footer />
    </>
  )
}

export default HomeView