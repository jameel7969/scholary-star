import React from 'react'

const DashboardMentor = () => {
  const courses = [
    { id: 'm1', title: 'UI/UX Bootcamp', enrollments: 220, rating: 4.7 },
    { id: 'm2', title: 'WP Theme Dev', enrollments: 140, rating: 4.5 },
  ]
  return (
    <div className="container-base py-12">
      <h1 className="h2">Mentor Dashboard</h1>
      <p className="lead mt-2">Manage your courses and track performance.</p>
      <div className="mt-6">
        <button className="btn-primary">Add New Course</button>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {courses.map(c => (
          <div key={c.id} className="border rounded-xl p-6">
            <div className="font-semibold">{c.title}</div>
            <div className="mt-2 text-sm text-slate-700">Enrollments: {c.enrollments}</div>
            <div className="text-sm text-slate-700">Rating: {c.rating}</div>
            <div className="mt-3 flex gap-3">
              <button className="btn-outline">Edit</button>
              <button className="btn-outline">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardMentor
