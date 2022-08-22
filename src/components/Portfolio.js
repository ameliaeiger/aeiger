import React, { useEffect, useState } from 'react'
import "./Portfolio.css"

//LIBRARIES
import Button from "@mui/material/Button"

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
// Swiper required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Portfolio = () => {
    const [loaded, setLoaded] = useState(false)

    //GENERATE PORTFOLIO SWIPER CAROUSEL
    const getCarousel = () => {
        return (
            <>
            <Swiper 
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <div className="feature-wrapper">
                        <div className="feature-info-wrapper">
                            <div className="feature-info">
                                <p>PROJECT:</p>
                                <Button
                                    style={style.navButton}
                                    href="https://lilearthling.herokuapp.com/">
                                    EARTHLING
                                </Button>
                            </div>
                            <div className="feature-description">
                                An app utilzing various NASA APIs to satisfy curiousity about near-earth objects (NEOs), which are typically asteroids or comets.
                                Earthling includes a search where users can input any date and see what NEOs were nearby on that day and whether or not any were potentially hazardous to the planet!
                            </div>
                        </div>
                        <img className="feature-image" src="https://i.imgur.com/YsQP5SZ.gif"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-wrapper">
                        <div className="feature-info-wrapper">
                            <div className="feature-info">
                            <p>PROJECT:</p>
                                <Button
                                    style={style.navButton}
                                    href="https://expo.dev/@discoverd/discoverd">
                                    discoverd
                                </Button>
                            </div>
                            <div className="feature-description">
                            An app for identifying interesting plant life from a user-submitted image. Users can access native hardware (either camera or image library) to select up to five images to be sent to a plant identification API. 
                            Users will receive information about their query as well as images and a link to its Wikipedia page for more information.
                            </div>
                        </div>
                        <div>
                            <img className="discoverd-image" src="https://github.com/ameliaeiger/discoverd/blob/main/Discoverd-Use.gif?raw=true"/>
                            {/* <img className="discoverd-image" src="https://github.com/ameliaeiger/discoverd/raw/main/Click-to-wiki.gif"/> */}
                        </div>
                        {/* <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${keyTwo}`}
                        /> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-wrapper">
                        <p>PROJECT:</p>
                        <Button
                            style={style.navButton}
                            href="https://github.com/ameliaeiger/travel-tracker">
                            TRAVEL TRACKER
                        </Button>
                        <img className="feature-image" src="https://i.imgur.com/08BNJcA.gif"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-wrapper">
                        <p>PROJECT:</p>
                        <Button
                            style={style.navButton}
                            href="https://peaceful-woodland-90062.herokuapp.com/">
                            MOVIE NOVA
                        </Button>
                    <img className="feature-image" src="https://i.imgur.com/Nt6vOG6.gif"/>
                        {/* <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${keyThree}`}
                        /> */}
                    </div>
                </SwiperSlide>
            </Swiper>
            </>
        )
    }
   
    //Trigger animation on load
    // useEffect(()=> {
    //     setTimeout(() => {
    //         setLoaded(true)
    //     }, "1100")
    // },[])


  return (
    <section className='portfolio-component'>
        {getCarousel()}
    </section>
  )
}

export default Portfolio

const style = {
    navButton: {
        display: "flex",
        justifyContent:"center",
        alignItem: "center",
        fontFamily:"jet",
        fontSize:"25px",
        fontWeight:"bold",
        color: "black",
        margin: 0,
        padding:0,
    }
}


//TO-DO

//Keyframe animation to fade in on page load
//App descriptions
//Deployed site/GitHub links
//Update images