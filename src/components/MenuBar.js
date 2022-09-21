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
            className="navbutton"
            // style={style.navButton}
            onClick={click}
            href="/" >
                HOME
        </Button>
        <Button
            className="navbutton"
            // style={style.navButton}
            onClick={click}
            href="/portfolio" >
                PORTFOLIO
        </Button>
        <Button
            className="navbutton"
            // style={style.navButton}
            onClick={click}
            href="https://github.com/ameliaeiger"
            target="_blank" >
                GITHUB
        </Button>
        <Button
            className="navbutton"
            // style={style.navButton}
            onClick={click}
            href="https://www.linkedin.com/in/ameliaeiger/"
            target="_blank" >
                LINKEDIN
        </Button>
    </section>
  )
}

export default MenuBar