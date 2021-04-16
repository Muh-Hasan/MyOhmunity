import React from "react"
import Logo from "../../assets/logo.svg"
const Navbar = () => {
  return (
    <div className="bg-white flex justify-center p-4">
      <div className="w-40">
        <img src={Logo} alt="logo" className="" />
      </div>
    </div>
  )
}

export default Navbar
