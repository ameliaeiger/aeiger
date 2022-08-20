import React from 'react'
import { useParams } from 'react-router-dom'

//COMPONENTS
import Header from '../components/Header'
import Bio from "../components/Bio"
import Footer from "../components/Footer"
import MenuBar from '../components/MenuBar'

const HomeView = () => {
        
    let params = useParams()
    console.log(params)
    console.log(params.poop)

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