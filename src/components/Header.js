import React, { useState, useEffect } from "react"
import "./Header.css"


const Header = () => {
    const [currentPage, setCurrentPage] = useState("")
    const [headerImage, setHeaderImage] = useState("")

    //Get current page url and set state
    useEffect(() => {
        setCurrentPage(window.location.href.substring(21))
        setHeaderImage(getHeaderImage())
    },[currentPage])


    //Translates current page to readable string for CSS class
    const getHeaderImage = () => {
        if (currentPage && currentPage=="/") {
            console.log("home")
            return "home"
        }
        if (currentPage && currentPage=="/portfolio"){
            console.log("portfolio")
            return "portfolio"
        }
    }

    return(
        <section className={`header-div ${headerImage}`}>
        </section>
    )
}

export default Header