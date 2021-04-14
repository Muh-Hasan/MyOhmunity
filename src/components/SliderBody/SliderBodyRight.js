import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


const SliderBodyRight = ({ bgColor , title, description , img }) => {
  const isMobile = useBreakpoint()
   console.log(isMobile);
    return (
        <div>
            <div
        style={{
          background: isMobile.md
            ? `linear-gradient(to top, ${bgColor} 60%, white 40%)`
            : `linear-gradient(to right, ${bgColor} 65%, white 30%)`,
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
                {title}
              </h2>
            </div>
            <div>
              <p className="font-roboto text-white text-lg w-4/5 md:w-full">
                {description}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <img src={img} alt={title} className="mockup-img" />
          </div>
        </div>
      </div>
        </div>
    )
}

export default SliderBodyRight
