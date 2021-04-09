import React from "react"
import Logo from "../../assets/logo.svg"
const Navbar = () => {
  return (
    <div className="bg-white flex justify-center p-4">
      <div className="w-32">
        <img src={Logo} alt="logo" className="min-w-full" />
      </div>
    </div>
  )
}

export default Navbar
