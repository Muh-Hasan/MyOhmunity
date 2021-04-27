import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Slider from "react-slick"
import ImgOneMobile from "../../assets/yogis1-mobile.png"
import ImgTwoMobile from "../../assets/yogis2-mobile.png"
import ImgThreeMobile from "../../assets/yogis3-mobile.png"
import ImgFourMobile from "../../assets/yogis4-mobile.png"
import SliderBodyRight from "../SliderBody/SliderBodyRight"

const CarouselRight = () => {
  const isMobile = useBreakpoint()
  const settings = {
    dots: isMobile.md ? false : true,
    fade: isMobile.md ? false : true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: isMobile.md ? false : true,
  }
  return (
    <div className="min-h-screen slider-right">
      <Slider {...settings}>
        <SliderBodyRight
          bgColor="rgb(111, 109, 136)"
          title="Practice with the best teachers"
          img={ImgOneMobile}
          description="Take classes in-person at nearby studios, outdoors or from the comfort of your home through our live virtual sessions. "
        />

        <SliderBodyRight
          bgColor="#F8F7F5"
          title="EXPAND YOUR CONSCIOUSNESS"
          img={ImgTwoMobile}
          description="Receive weekly articles to keep your inspiration going. Plus, discover illuminating books and documentaries to help take your practice to the next level."
        />

        <SliderBodyRight
          bgColor="rgb(111, 109, 136)"
          title="Get unlimited access 
            to all types of yoga "
          img={ImgThreeMobile}
          description="Sort by style, time and skill level to discover the classes that suit you best."
        />

        <SliderBodyRight
          bgColor="#F8F7F5"
          title="STAY MOTIVATED"
          img={ImgFourMobile}
          description="Get rated by your teachers to stay motivated to and deepen your practice."
        />
      </Slider>
    </div>
  )
}

export default CarouselRight
