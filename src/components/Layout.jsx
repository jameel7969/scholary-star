import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import FloatingWhatsapp from './FloatingWhatsapp'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <TopBar /> */}
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}

export default Layout
