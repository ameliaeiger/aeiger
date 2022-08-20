import React from 'react'

//LIBRARIES
import Button from "@mui/material/Button"

//COMPONENTS
import "./MenuBar.css"

const MenuBar = () => {
    const click = () => {
        console.log("click")
    }

  return (
    <section className='menu-bar-component'>
        <Button
            style={style.navButton}
            onClick={click}
            href="/">
                HOME
        </Button>
        <Button
            style={style.navButton}
            onClick={click}
            href="/portfolio">
                PORTFOLIO
        </Button>
        <Button
            style={style.navButton}
            onClick={click}
            href="https://github.com/ameliaeiger">
                GITHUB
        </Button>
        <Button
            style={style.navButton}
            onClick={click}
            href="https://www.linkedin.com/in/ameliaeiger/">
                LINKEDIN
        </Button>
    </section>
  )
}

export default MenuBar

const style = {
    navButton: {
        color: "black"
    }
}