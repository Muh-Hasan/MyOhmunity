import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from "../components/Navbar"
import ImgOne from "../assets/imgOne.png"
import ImgTwo from "../assets/imgTwo.jpg"
import ImgThree from "../assets/imgThree.jpg"
import ImgFour from "../assets/imgFour.png"
import GoogleBtn from "../assets/googlePlay.png"
import Carousel from "../components/Carousel"
import BottomCarousel from "../components/Carousel/BottomCarousel"
export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div>
          <img
            src={ImgOne}
            alt="imgOne"
            className="w-full img-min-h object-cover"
          />
        </div>
      </section>
      <section className="flex items-center justify-center min-h-screen bg-FA">
        <div className="w-10/12	text-center sm:w-4/5">
          <h1 className="font-lora text-5xl	fcolor-63 leading-11 sm:text-4xl">
            Ohmunity is your digital Yoga community designed to unite yogis
            around the world.
          </h1>
        </div>
      </section>
      <section>
        <div>
          <img
            src={ImgTwo}
            alt="imgTwo"
            className="w-full min-h-screen object-cover"
          />
        </div>
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <div>
          <img
            src={ImgThree}
            alt="imgTwo"
            className="w-full min-h-screen object-cover"
          />
        </div>
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        
      </section>
      {/* <section className="h-min-full">
        <div className="container flex items-center justify-between">
          <div>
            <div>
              <h3>There is no better time than now.</h3>
            </div>
            <div>
              <div>
                <img src={GoogleBtn} alt='googlebtn' />
              </div>
              <div>
                <img src={GoogleBtn} alt='goo' />
              </div>
            </div>
          </div>
          <div>
            <img src={ImgFour} alt='imgFour' />
          </div>
        </div>
      </section> */}
      <section>
        <div className="container mt-16	mb-8">
          <div className="font-roboMono uppercase text-base text-center text-xl leading-10">
            <span> follow us on</span>
            <span className="fontColor-green"> instagram </span>
            <span>and share your journey with us.</span>
          </div>
        </div>
        <div className="mb-20">
          <div className="font-roboMono uppercase text-base text-center text-xl">
            <p>#MYOHMUNITY</p>
          </div>
        </div>
        <div>
          <BottomCarousel />
        </div>
      </section>
    </div>
  )
}
