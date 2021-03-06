import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Slider from "react-slick"
import SliderBodyLeft from "../SliderBody/SliderBodyLeft"
import ImgOneMobile from "../../assets/studios1-mobile.png"
import ImgTwoMobile from "../../assets/studios2-mobile.png"
import ImgThreeMobile from "../../assets/studios3-mobile.png"
import ImgFourMobile from "../../assets/studios4-mobile.png"

const CarouselLeft = () => {
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
    <div className="slider-left">
      <Slider {...settings}>
        <SliderBodyLeft
          bgColor="#637470"
          title="Promote your classes"
          description="Expand your network by signing up for FREE and being discoverable to a wide community of yogis."
          img={ImgOneMobile}
        />
        <SliderBodyLeft
          bgColor="#F8F7F5"
          title="Get feedback from 
                your students "
          description="Learn what’s working well and what you can do to improve your student’s experience even more."
          img={ImgTwoMobile}
        />
        <SliderBodyLeft
          bgColor="#637470"
          title="STAY ORGANIZED"
          description="Our simple, intuitive design makes it easy to add and schedule your classes. Plus! Ohmunity will notify you of any changes with your bookings, and provide a summary of your classes, student attendance and earnings."
          img={ImgThreeMobile}
        />
        <SliderBodyLeft
          bgColor="#F8F7F5"
          title="Worry-Free Streaming"
          description="Ohmunity automatically emails a secure (company) livestream virtual class link to your enrolled students,  so you never need to worry about the logistical stuff. Simply log on and begin your class. "
          img={ImgFourMobile}
        />
      </Slider>
    </div>
  )
}

export default CarouselLeft
