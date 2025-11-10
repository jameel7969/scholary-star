import React from 'react'

const StatsStrip = () => {
  const stats = [
    { value: '20k+', label: 'Active Students' },
    { value: '1.3k+', label: 'Online Courses' },
    { value: '150+', label: 'Expert Mentors' },
    { value: '4.8/5', label: 'Avg. Rating' },
  ]
  return (
    <section className="bg-white border-y">
      <div className="container-base py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
            <div className="text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
