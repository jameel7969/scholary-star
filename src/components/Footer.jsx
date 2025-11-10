import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container-wide py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-emerald-500 text-slate-900 font-extrabold">★</span>
            <span className="font-extrabold tracking-tight">Scholary Star <span className="text-emerald-400">Science Academy</span></span>
          </div>
          <p className="mt-4 text-slate-400">A modern academy connecting students with expert mentors and high‑quality subjects.</p>
        </div>
        <div>
          <h4 className="h3 mb-4 text-white">Pages</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/subjects" className="hover:text-white">Subjects</Link></li>
            <li><Link to="/mentors" className="hover:text-white">Mentors</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="h3 mb-4 text-white">Support</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="h3 mb-4 text-white">Newsletter</h4>
          <p className="text-slate-400 mb-4">Get updates on new subjects and mentors.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md bg-white text-slate-900" />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-4 text-sm text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Scholary Star Science Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
