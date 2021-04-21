import React from "react"
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext
// } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Slider from "react-slick"
import ImgOne from "../../assets/bottomImgOne.png"
import ImgTwo from "../../assets/bottomImgTwo.png"
import ImgThree from "../../assets/bottomImgThree.png"

const BottomCarousel = () => {
  const isMobile = useBreakpoint()
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 1500,
    responsive: [{
      breakpoint: 1250,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    }]
  }
  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
  }
  return (
    <div
      className="bottomCarousel"
      style={{
        background: isMobile.md
          ? "white"
          : "linear-gradient(to top, #424242 50%, white 50%)",
      }}
    >
      {isMobile.md ? (
        <div className="bottomCarouselMobile">
          <Slider {...settingsMobile}>
            <div>
              <img src={ImgTwo} alt="slide-1" />
            </div>
            <div>
              <img src={ImgOne} alt="slide-2" />
            </div>
            <div>
              <img src={ImgThree} alt="slide-3" />
            </div>
          </Slider>
        </div>
      ) : (
        <div className="bottomCarouselDesktop">
          <Slider {...settings}>
            <div className='slides'>
              <img src={ImgTwo} alt="slide-1" />
            </div>
            <div className='slides'>
              <img src={ImgOne} alt="slide-2" />
            </div>
            <div className='slides'>
              <img src={ImgThree} alt="slide-3" />
        
        </div>  
        </Slider>
        </div>
      )}
    </div>
  )
}

export default BottomCarousel
