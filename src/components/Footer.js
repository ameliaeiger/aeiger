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
        if (currentPage && currentPage.includes("portfolio")){
            return "portfolio-f"

        } else if (currentPage){
            return "home-f"
        }
    }
  return (
    <section className={`footer-component ${footerImage}`}>
    </section>
  )
}

export default Footer