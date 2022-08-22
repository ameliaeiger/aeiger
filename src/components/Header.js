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
        if (currentPage && currentPage.includes("portfolio")){
            return "portfolio"
        } else if (currentPage){
            return "home"
        }
    }

    return(
        <section className={`header-div ${headerImage}`}>
        </section>
    )
}

export default Header