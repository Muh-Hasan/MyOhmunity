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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className="bottomCarousel">
      {isMobile.md ? (
        ""
      ) : (
        <Slider {...settings}>
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
      )}
    </div>
  )
}

export default BottomCarousel
