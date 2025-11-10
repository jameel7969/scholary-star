import React from 'react'
import pageHeaderBg from '../assets/page-header-bg.png'
import Breadcrumbs from '../components/Breadcrumbs'

const Contact = () => {
  return (
    <div>
      {/* Page header with background image, left white overlay, and readable text */}
      <section className="relative overflow-hidden bg-white">
        <img
          src={pageHeaderBg}
          alt=""
          className="absolute right-0 h-auto w-fit"
          style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)' }}
        />
        {/* left overlay to blend into the white background */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <Breadcrumbs items={[{to:'/',label:'Home'},{label:'Contact'}]} />
          <div className="text-slate-800"><span className="sr-only">Breadcrumb</span></div>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Contact</h1>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Leave A Reply</h3>
          <p className="mt-1 text-sm text-slate-600">Fill-up the form and message us your amazing question</p>
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="h-11 w-full rounded-full border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your Name" />
              <input className="h-11 w-full rounded-full border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your Email" type="email" />
            </div>
            <input className="h-11 w-full rounded-full border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Select Subject" />
            <textarea className="min-h-[160px] w-full rounded-2xl border border-slate-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Message" />
            <button type="button" className="inline-flex h-11 items-center justify-center rounded-full bg-teal-600 px-6 font-semibold text-white hover:bg-teal-500">Submit Message</button>
          </form>
        </div>

        {/* Office info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Office Information</h3>
            <p className="mt-1 text-sm text-slate-600">Completely recapitalize 24/7 communities via standards compliant metrics whereas.</p>
            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-100 text-teal-700">📞</span>
                <div>
                  <div className="font-semibold text-slate-900">Phone Number & Email</div>
                  <div className="text-sm text-slate-600">(+65) - 48596 - 5789 • hello@edcare.com</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-100 text-teal-700">📍</span>
                <div>
                  <div className="font-semibold text-slate-900">Our Office Address</div>
                  <div className="text-sm text-slate-600">2699 Hilton Street Victoria Road, New York, Canada</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-100 text-teal-700">⏰</span>
                <div>
                  <div className="font-semibold text-slate-900">Official Work Time</div>
                  <div className="text-sm text-slate-600">Mon–Fri: 09:00 – 20:00 • Sat–Sun: 10:30 – 22:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
