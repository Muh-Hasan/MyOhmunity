import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Navbar from "../components/Navbar"
import ImgOne from "../assets/imgOne.png"
import BottomCarousel from "../components/Carousel/BottomCarousel"
import CarouselRight from "../components/Carousel/CarouselRight"
import CarouselLeft from "../components/Carousel/CarouselLeft"
import Image from "../components/Image"
import ImgTwo from "../assets/imgTwo.jpg"
import ImgThree from "../assets/imgThree.jpg"
import ImgFour from "../assets/imgFour.png"
import GoogleBtn from "../assets/googlePlay.png"
import AppleBtn from "../assets/apple.png"

export default function Home() {
  const isMobile = useBreakpoint()
  return (
    <div>
      <Navbar />
      <section>
        <Image src={ImgOne} alt="Image One" />
      </section>
      <section className="flex items-center justify-center min-h-screen bg-FA">
        <div className="w-10/12	text-center sm:w-4/5">
          <h1 className="font-lora fcolor-63 leading-11 md:text-4xl">
            Ohmunity is your digital Yoga community{isMobile.md ? " " : <br />}
            designed to unite yogis around the world.
          </h1>
        </div>
      </section>
      <section>
        <Image src={ImgTwo} alt="Image Two" />
      </section>
      <section>
        <CarouselRight />
      </section>
      <section>
        <Image src={ImgThree} alt="Image Three" />
      </section>
      <section>
        <CarouselLeft />
      </section>
      <section>
        <div className="min-h-screen grid grid-cols-2 md:grid-cols-1 background-gray">
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-1/2 md:w-full">
              <div className="mb-12 md:text-center md:mt-12">
                <h1 className="font-lora md:text-3xl	fcolor-63">
                  There is no better time than now.
                </h1>
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
          <div className="flex items-end justify-center">
            <div className="mockup-img-container margin-img">
              <img src={ImgFour} alt="imgFour" className="mockup-img-1" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-16	mb-8">
          <div className="font-roboMono uppercase text-base text-center">
            <span className="md:text-xl md:leading-10"> follow us on</span>{" "}
            <span className="fontColor-green md:text-xl md:leading-10">
              instagram
            </span>{" "}
            <span className="md:text-xl md:leading-10">
              and share your journey with us.
            </span>
          </div>
        </div>
        <div className="mb-20">
          <div className=" text-base text-center ">
            <p className="font-roboMono uppercase md:text-xl">#MYOHMUNITY</p>
          </div>
        </div>
        <div>
          <BottomCarousel />
        </div>
        <div className="flex justify-center items-center flex-col background-brown">
          <div className="text-center font-roboMono text-white	">
            <p className="md:text-lg md:leading-10">
              Copyright © 2021 KRANBOS LLC
            </p>
            <p className="md:text-lg md:leading-10">ALL RIGHTS RESERVED.</p>
            <p className="md:text-lg md:leading-10">Terms | Privacy</p>
          </div>
        </div>
      </section>
    </div>
  )
}
