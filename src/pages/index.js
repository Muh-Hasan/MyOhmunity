import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Navbar from "../components/Navbar"
import ImgOne from "../assets/imgOne.png"
import ImgTwo from "../assets/imgTwo.jpg"
import ImgThree from "../assets/imgThree.jpg"
import ImgFour from "../assets/imgFour.png"
import GoogleBtn from "../assets/googlePlay.png"
import AppleBtn from "../assets/apple.png"
import BottomCarousel from "../components/Carousel/BottomCarousel"
import CarouselRight from "../components/Carousel/CarouselRight"
import CarouselLeft from "../components/Carousel/CarouselLeft"

export default function Home() {
  const isMobile = useBreakpoint()
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
          <h1 className="font-lora text-5xl	fcolor-63 leading-11 md:text-4xl">
            Ohmunity is your digital Yoga community{isMobile.md ? " ":<br />}designed to unite yogis
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
        <CarouselRight />
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
        <CarouselLeft />
      </section>
      <section>
        <div className="min-h-screen max-h-update grid grid-cols-2 md:grid-cols-1 background-gray">
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-1/2 md:w-full md:mb-12">
              <div className="mb-12 md:text-center md:mt-12">
                <h3 className="font-lora text-3xl	fcolor-63 leading-10">
                  There is no better time than now.
                </h3>
              </div>
              <div className="flex btn-contain md:justify-center md:flex-col md:items-center">
                <div className="md:mb-8 md:mr-0 mr-8">
                  <img src={GoogleBtn} alt="googlebtn" />
                </div>
                <div>
                  <img src={AppleBtn} alt="appleBtn" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  mt-12">
            <div className="mockup-img-container">
              <img src={ImgFour} alt="imgFour" className="mockup-img-1" />
            </div>
          </div>
        </div>
      </section>

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
        <div className='flex justify-center items-center flex-col background-brown'>
          <div className='text-center font-roboMono text-lg leading-10 text-white	'>
            <p>Copyright © 2021 KRANBOS LLC</p>
            <p>ALL RIGHTS RESERVED.</p>
            <p>Terms | Privacy</p>
          </div>
        </div>
      </section>
    </div>
  )
}
