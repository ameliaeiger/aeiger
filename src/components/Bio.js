import React, { useEffect, useState } from 'react'
import "./Bio.css"

const Bio = () => {
    const [loaded, setLoaded] = useState(false)

    //Trigger animation on load
    useEffect(()=> {
        setTimeout(() => {
            setLoaded(true)
        }, "1100")
    },[])


  return (
    <section className='bio-component'>
        <div className={!loaded ? "hidden" : "slide-left"}>
        </div>
        <div className={!loaded ? "hidden" : "slide-right"}>
        An inquisitive individual, a passionate learner, a dedicated collaborator, explorer of Colorado's mountains, and a Front-End Developer. I thrive on tackling a problem's complexities, sweating the small (but meaningful) stuff,and crafting engaging websites.
        </div>

    </section>
  )
}

export default Bio