import React from 'react'
import reqImg from '../assets/content-img-2.png'

const CourseRequest = () => {
  return (
    <section className="py-16 md:py-24 w-full bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px]  text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 p-6 sm:p-8 md:p-10">
            {/* Left image */}
            <div className="order-2 md:order-1">
              <div className="overflow-hidden rounded-2xl bg-slate-800">
                <img src={reqImg} alt="Course Request" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Right content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-300/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M13 2v3m0 14v3m8-8h-3M5 12H2m15.364 6.364l-2.121-2.121M8.757 8.757 6.636 6.636m10.607 0-2.121 2.121M8.757 15.243l-2.121 2.121" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Course Request
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Find Your Best Course With Us
              </h2>
              <p className="mt-3 text-slate-300 max-w-xl">
                Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.
              </p>

              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 space-y-6">
                <input type="text" placeholder="Course Name" className="h-12 w-full rounded-full bg-white/10 px-4 text-sm placeholder:text-slate-300/70 outline-none ring-1 ring-white/15 focus:ring-emerald-400/40" />
                <input type="email" placeholder="Email Address" className="h-12 w-full rounded-full bg-white/10 px-4 text-sm placeholder:text-slate-300/70 outline-none ring-1 ring-white/15 focus:ring-emerald-400/40" />
                <div className="sm:col-span-2">
                  <button type="button" className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-6 font-semibold text-slate-900 hover:bg-emerald-400 transition">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseRequest
