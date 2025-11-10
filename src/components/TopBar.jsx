import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className="hidden md:block bg-slate-900 text-slate-100 text-sm">
      <div className="container-wide py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="opacity-80">Helano Street, New York</span>
          <span className="opacity-80">Mon - Sat: 8:00 - 15:00</span>
          <a href="tel:+0123456789" className="hover:text-white">+01 234 567 89</a>
        </div>
        <div className="flex items-center gap-5">
          <a className="hover:text-white" href="#">Login</a>
          <span className="opacity-40">/</span>
          <a className="hover:text-white" href="#">Register</a>
          <div className="h-5 w-px bg-white/20 mx-2" />
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" className="hover:text-white" href="#"><FaFacebookF /></a>
            <a aria-label="Twitter" className="hover:text-white" href="#"><FaTwitter /></a>
            <a aria-label="LinkedIn" className="hover:text-white" href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
