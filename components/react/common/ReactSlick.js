/*
  * Use this component for react slick since this component imports
  * the required css and other items
  * 
  * Props
  * 
  * 1. optional settings = the usual ones we pass for react slick
  * 
  * 2. children = N number of cards or images 
*/

'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const REACT_SLICK_SETTINGS = (optionalSettings) =>{
  const defaultSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const settings = {...defaultSettings, ...optionalSettings}
  return settings
}

function ReactSlick({children, optionalSettings}) {
  const settings = REACT_SLICK_SETTINGS(optionalSettings)
  return (
    <Slider {...settings} className="slider-container">
      {children}
    </Slider>
  );
}

export default ReactSlick
