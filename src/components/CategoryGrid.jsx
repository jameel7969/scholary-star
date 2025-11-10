import React from 'react'
import { FiBriefcase, FiPenTool, FiUserCheck, FiActivity, FiTrendingUp, FiDollarSign, FiCpu, FiCamera, FiDatabase, FiAperture, FiLayers, FiSmartphone, FiBox } from 'react-icons/fi'

const CategoryGrid = () => {
  const items = [
    { label: 'Business Management', icon: <FiBriefcase /> },
    { label: 'Arts & Design', icon: <FiPenTool /> },
    { label: 'Personal Development', icon: <FiUserCheck /> },
    { label: 'Health & Fitness', icon: <FiActivity /> },
    { label: 'Marketing', icon: <FiTrendingUp /> },
    { label: 'Business & Finance', icon: <FiDollarSign /> },
    { label: 'Computer Science', icon: <FiCpu /> },
    { label: 'Video & Photography', icon: <FiCamera /> },
    { label: 'Data Science', icon: <FiDatabase /> },
    { label: 'IT Startup Agency', icon: <FiAperture /> },
    { label: 'Software Company', icon: <FiLayers /> },
    { label: 'High-Tech Company', icon: <FiSmartphone /> },
    { label: '3D Gaming Studio', icon: <FiBox /> },
  ]

  return (
    <section className="py-12" id="categories">
      <div className="container-wide text-center">
        <div className="mb-6">
          <div className="pill mx-auto w-fit">
            <span className="text-slate-700">Our Subjects Categories</span>
          </div>
          <h2 className="h2 mt-3">Discover the diverse subjects we’re offering to boost your skills.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {items.map((it) => (
            <div key={it.label} className="group inline-flex items-center gap-3 rounded-full bg-white border border-slate-200 px-4 sm:px-6 py-3 shadow-sm hover:shadow transition">
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-100">
                <span className="text-[18px]">{it.icon}</span>
              </span>
              <span className="font-semibold text-slate-800 whitespace-nowrap">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
