import React, { useEffect, useState } from 'react'
import "./Portfolio.css"

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
                        <p className='feature-title'>Earthling</p>
                        <img className="feature-image" src="https://i.imgur.com/YsQP5SZ.gif"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-wrapper">
                        <p className='feature-title'>discoverd</p>
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
                        <p className='feature-title'>FitLit</p>
                        <img className="feature-image" src="https://i.imgur.com/08BNJcA.gif"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-wrapper">
                    <p className='feature-title'>Movie Nova</p>
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