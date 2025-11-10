import React, { useState } from 'react'
import { FiZap, FiPhoneCall } from 'react-icons/fi'

const VideoModal = ({ open, onClose, youtubeId }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-3xl aspect-video bg-black" onClick={(e) => e.stopPropagation()}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="About video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}

const AboutSection = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-12">
      <div className="container-wide grid lg:grid-cols-2 gap-10 items-center">
        {/* Left images */}
        <div className="flex items-start gap-2">
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden ring-1 ring-slate-200">
              <img src="/src/assets/about-img-1.jpg" alt="About 1" className="w-full h-[260px] object-cover" />
            </div>
            {/* play button overlay */}
            <button aria-label="Play video" onClick={() => setOpen(true)} className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-teal-600"><path d="M8.25 4.5v15l10.5-7.5-10.5-7.5z"/></svg>
            </button>

            {/* support card */}
            <div className="mt-2 bg-teal-600 text-white rounded-tr-[36px] rounded-bl-[36px] px-6 py-5 flex items-center gap-4 w-[320px] shadow">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <FiPhoneCall className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase opacity-90">Online Support</div>
                <div className="text-lg font-semibold">+258 152 3659</div>
              </div>
            </div>
          </div>

          {/* right small image */}
          <div className="hidden sm:block">
            <div className="rounded-tl-[36px] rounded-br-[36px] overflow-hidden shadow-xl">
              <img src="/src/assets/about-img-2.jpg" alt="About 2" className="w-[260px] h-[350px] object-cover" />
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="px-3 sm:px-0">
          <div className="pill w-fit">
            <span className="dot"><FiZap size={12} /></span>
            <span className="text-slate-700">Get More About Us</span>
          </div>
          <h2 className="h2 mt-4">Over 10 Years in Distant learning for Skill Development</h2>
          <p className="lead mt-3 max-w-xl">Compellingly procrastinate equity invested markets with efficient process improvements; actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-[40px] text-teal-600">🎓</div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">9.5K+</div>
                <div className="text-sm text-slate-600">Total active students taking gifted courses</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[30px] text-teal-600">👩‍🏫</div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">6.7K+</div>
                <div className="text-sm text-slate-600">Total active students taking gifted courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} youtubeId="dQw4w9WgXcQ" />
    </section>
  )
}

export default AboutSection
