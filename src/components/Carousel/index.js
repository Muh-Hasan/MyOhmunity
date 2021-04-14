import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Slider from "react-slick"
import ImgOne from "../../assets/yogis1.png"
import SliderBodyRight from "../SliderBody/SliderBodyRight"

const Carousel = () => {
  const isMobile = useBreakpoint()
  const settings = {
    dots: isMobile.md ? false : true,
    fade: isMobile.md ? false : true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <SliderBodyRight
            bgColor="rgb(111, 109, 136)"
            title="Practice with 
the best teachers"
            img={ImgOne}
            description="Take classes in-person at nearby studios, outdoors or from the comfort of your home through our live virtual sessions. "
          />
        </div>
        <div>
          <SliderBodyRight
            bgColor="rgb(111, 109, 136)"
            title="Practice with 
the best teachers"
            img={ImgOne}
            description="Take classes in-person at nearby studios, outdoors or from the comfort of your home through our live virtual sessions. "
          />
        </div>
        <div>
          <SliderBodyRight
            bgColor="white"
            title="Practice with 
the best teachers"
            img={ImgOne}
            description="Take classes in-person at nearby studios, outdoors or from the comfort of your home through our live virtual sessions. "
          />
        </div>
        <div>
          <SliderBodyRight
            bgColor="rgb(111, 109, 136)"
            title="Practice with 
the best teachers"
            img={ImgOne}
            description="Take classes in-person at nearby studios, outdoors or from the comfort of your home through our live virtual sessions. "
          />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
