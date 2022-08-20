import React, { useEffect, useState } from 'react'
import "./Footer.css"

const Footer = () => {
    const [currentPage, setCurrentPage] = useState("")
    const [footerImage, setfooterImage] = useState("")

    //Get current page url and set state
    useEffect(() => {
        setCurrentPage(window.location.href.substring(21))
        setfooterImage(getfooterImage())
    },[currentPage])


    //Translates current page to readable string for CSS class
    const getfooterImage = () => {
        if (currentPage && currentPage=="/") {
            console.log("home")
            return "home-f"
        }
        if (currentPage && currentPage=="/portfolio"){
            console.log("portfolio-f")
            return "portfolio-f"
        }
    }
  return (
    <section className={`footer-component ${footerImage}`}>
    </section>
  )
}

export default Footer