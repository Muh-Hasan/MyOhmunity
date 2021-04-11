import React from "react"
import { useMediaQuery } from "react-responsive"
import Slider from "react-slick"
import ImgOne from "../../assets/yogis1.png"

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
  const style = {
    background: `rgb(111, 109, 136)`,
    // "@media (max-width: 768px)": {
    //   background: `linear-gradient(to bottom, rgb(111, 109, 136) 50%, white 40%)`,
    // },
  }
  return (
    <>
      <div
        style={{
          background: isMobile
            ? `linear-gradient(to top, ${"rgb(111, 109, 136)"} 60%, white 40%)`
            : `linear-gradient(to right, ${"rgb(111, 109, 136)"} 65%, white 30%)`,
        }}
        className="min-h-screen"
      >
        <div className="flex items-center justify-center md:flex-col-reverse  container">
          <div className="w-2/5 text-left md:text-center md:w-full">
            <div className="flex md:justify-center">
              <div className="w-14 h-0.5 bg-white"></div>
            </div>
            <div className=" my-8 ">
              <h2 className="font-roboMono text-white	text-3xl leading-10 uppercase">
                Practice with <br /> the best teachers
              </h2>
            </div>
            <div>
              <p className="font-roboto text-white text-lg w-4/5 md:w-full">
                Take classes in-person at nearby studios, outdoors or from the
                comfort of your home through our live virtual sessions.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <img src={ImgOne} className="mockup-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel

// className="min-h-screen"
//       style={{ backgroundColor: "#6F6D88" }}
// flex items-center justify-center md:flex-col-reverse
