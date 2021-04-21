import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Slider from "react-slick"
import ImgOne from "../../assets/bottomImgOne.png"
import ImgTwo from "../../assets/bottomImgTwo.png"
import ImgThree from "../../assets/bottomImgThree.png"

const BottomCarousel = () => {
  const isMobile = useBreakpoint()
  const setting= {
    dots: false,
    arrows: false,
    infinity: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,

      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,

      }
    }]
  }
  return (
    <div
      className="bottomCarousel "
      style={{
        background: isMobile.md
          ? "white"
          : "linear-gradient(to top, #424242 50%, white 50%)",
      }}
    >
      <div className="bottomCarouselDesktop">
        <Slider {...setting}>
          <div className='img-div'>
            <img src={ImgTwo} alt="slide-1" />
          </div>
          <div className='img-div'>
            <img src={ImgOne} alt="slide-2" />
          </div>
          <div className='img-div'>
            <img src={ImgTwo} alt="slide-1" />
          </div>
          <div className='img-div'>
            <img src={ImgOne} alt="slide-2" />
          </div>
          <div className='img-div'>
            <img src={ImgTwo} alt="slide-1" />
          </div>
          <div className='img-div'>
            <img src={ImgOne} alt="slide-2" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default BottomCarousel
