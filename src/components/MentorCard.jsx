import React from 'react'

const MentorCard = ({ name, role, image }) => {
  return (
    <div className="text-center border rounded-xl p-6 hover:shadow-lg transition bg-white">
      <img src={image} alt={name} className="h-28 w-28 rounded-full object-cover mx-auto" />
      <div className="mt-4 font-semibold text-lg">{name}</div>
      <div className="text-slate-600 text-sm">{role}</div>
    </div>
  )
}

export default MentorCard
