import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const SliderBodyLeft = ({ bgColor, title, description, img, imgMobile }) => {
  const isMobile = useBreakpoint()
  return (
    <>
      <div className="min-h-screen grid grid-cols-2 md:grid-cols-1">
        <div
          className="h-full w-full flex justify-center items-center md:order-1 md:mt-8"
          style={{
            background:
              bgColor === "#637470"
                ? isMobile.md
                  ? `linear-gradient(to top, ${bgColor} 50%, white 50%)`
                  : `linear-gradient(to left, ${bgColor} 50%, white 50%)`
                : bgColor,
          }}
        >
          <img
            src={isMobile.md ? imgMobile : img}
            alt={title}
            className="mockup-img md:mb-8 md:mt-8"
          />
        </div>

        <div
          className="flex items-center justify-center text-left md:text-center w-full h-full md:order-2"
          style={{ background: bgColor }}
        >
          <div className="w-1/2 md:w-full">
            <div className="flex md:justify-center">
              <div
                className={`w-14 h-0.5 ${
                  bgColor === "#637470"
                    ? "bg-white"
                    : "background-green"
                }`}
              ></div>
            </div>
            <div className=" my-8 ">
              <h2
                className={`font-roboMono ${
                  bgColor === "#637470"
                    ? "text-white"
                    : "text-green"
                } text-3xl leading-10 uppercase`}
              >
                {title}
              </h2>
            </div>
            <div>
              <p
                className={`font-roboto md:mb-8 ${
                  bgColor === "#637470"
                    ? "text-white"
                    : "text-green"
                } text-lg w-4/5 md:w-full`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderBodyLeft