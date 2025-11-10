import React from 'react'

const TestimonialCard = ({ quote, name, role, avatar }) => {
  return (
    <div className="border rounded-xl p-6 bg-white">
      <p className="italic text-slate-700">“{quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-600">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
