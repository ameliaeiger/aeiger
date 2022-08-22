import React, { useState, useEffect } from "react"
import "./Header.css"


const Header = () => {
    const [currentPage, setCurrentPage] = useState("")
    const [headerImage, setHeaderImage] = useState("")

    //Get current page url and set state
    useEffect(() => {
        setCurrentPage(window.location.href)
        setHeaderImage(getHeaderImage())
    },[currentPage])


    //Translates current page to readable string for CSS class
    const getHeaderImage = () => {
        if (currentPage && currentPage.includes("/") && currentPage.length<30) {
            console.log("home")
            return "home"
        }
        if (currentPage && currentPage.includes("portfolio")){
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