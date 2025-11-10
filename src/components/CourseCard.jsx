import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ id, title, image, teacher, price = 'Free', lessons = 12, students = 120, level = 'Beginner' }) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Link to={`/courses/${id}`}>
          <img src={image} alt={title} className="w-full h-52 sm:h-56 object-cover rounded-t-2xl" />
        </Link>
        <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">{price}</span>
      </div>
      <div className="p-5">
        <div className="text-emerald-700 text-xs font-semibold mb-1">{teacher}</div>
        <Link to={`/courses/${id}`} className="block font-semibold text-lg tracking-tight text-slate-900 group-hover:text-emerald-700">{title}</Link>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span className="rounded-full bg-slate-100 px-3 py-1">{lessons} Lessons</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">{students} Students</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">{level}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-500">Starts anytime</div>
          <Link to={`/courses/${id}`} className="inline-flex items-center gap-1 text-emerald-700 font-semibold hover:underline">
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
