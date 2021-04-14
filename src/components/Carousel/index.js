import React from "react"
import { useMediaQuery } from "react-responsive"
import Slider from "react-slick"
import ImgOne from "../../assets/yogis1.png"
import SliderBodyRight from "../SliderBody/SliderBodyRight"

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

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
        {/* <div>
          <SliderBodyRight bgColor="" title="" img={} description='' />
        </div>
        <div>
          <SliderBodyRight bgColor="" title="" img={} description='' />
        </div>
        <div>
          <SliderBodyRight bgColor="" title="" img={} description='' />
        </div> */}
      </Slider>
    </div>
  )
}

export default Carousel
