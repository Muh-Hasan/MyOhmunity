import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Slider from "react-slick"
import ImgOne from "../../assets/bottomImgOne.png"
import ImgTwo from "../../assets/bottomImgTwo.png"
import ImgThree from "../../assets/bottomImgThree.png"

const BottomCarousel = () => {
  const isMobile = useBreakpoint()
  const setting = {
    dots: false,
    arrows: false,
    infinity: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div
      style={{
        background: isMobile.md
          ? "white"
          : "linear-gradient(to top, #424242 50%, white 50%)",
      }}
    >
      <div className="bottomCarousel">
        <Slider {...setting}>
          <div className="slider__item">
            <img src={ImgTwo} alt="slide-1" />
          </div>
          <div className="slider__item">
            <img src={ImgOne} alt="slide-2" />
          </div>
          <div className="slider__item">
            <img src={ImgTwo} alt="slide-1" />
          </div>
          <div className="slider__item">
            <img src={ImgOne} alt="slide-2" />
          </div>
          <div className="slider__item">
            <img src={ImgTwo} alt="slide-1" />
          </div>
          <div className="slider__item">
            <img src={ImgOne} alt="slide-2" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default BottomCarousel
