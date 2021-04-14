import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/swiper.scss"
import "swiper/swiper-bundle.min.css"
import ImgOne from "../../assets/bottomImgOne.png"
import ImgTwo from "../../assets/bottomImgTwo.png"
import ImgThree from "../../assets/bottomImgThree.png"
const BottomCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <div className="ml-4 bottomCarousel">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <img src={ImgOne} alt="bottomImgOne" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ImgTwo} alt="bottomImgTwo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ImgThree} alt="bottomImgThree" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Slider {...settings}>
        <div>
          <img src={ImgOne} alt="bottomImgOne" />
        </div>
        <div>
          <img src={ImgTwo} alt="bottomImgTwo" />
        </div>
        <div>
          <img src={ImgThree} alt="bottomImgThree" />
        </div>
      </Slider> */}
    </div>
  )
}

export default BottomCarousel
