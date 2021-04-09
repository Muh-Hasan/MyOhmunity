import React from "react"
import Navbar from "../components/Navbar"
import ImgOne from "../assets/imgOne.png"
export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div>
          <img
            src={ImgOne}
            alt="imgOne"
            className="w-full min-h-screen object-cover"
          />
        </div>
      </section>
      <section className="flex items-center justify-center min-h-screen bg-FA">
        <div className="w-1/2 text-center sm:w-4/5">
          <h1 className="font-lora text-4xl	fcolor-63">
            Ohmunity is your digital Yoga community designed to unite yogis
            around the world.
          </h1>
        </div>
      </section>
    </div>
  )
}
