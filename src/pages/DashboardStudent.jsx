import React from 'react'

const DashboardStudent = () => {
  const enrolled = [
    { id: 'c1', title: 'Advanced UI/UX Design', progress: 62 },
    { id: 'c2', title: 'WordPress Development', progress: 35 },
  ]
  return (
    <div className="container-base py-12">
      <h1 className="h2">Student Dashboard</h1>
      <p className="lead mt-2">Track your courses and certificates.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {enrolled.map(e => (
          <div key={e.id} className="border rounded-xl p-6">
            <div className="font-semibold">{e.title}</div>
            <div className="mt-3 h-3 bg-slate-200 rounded-full">
              <div className="h-3 bg-sky-600 rounded-full" style={{width: `${e.progress}%`}} />
            </div>
            <div className="mt-2 text-sm text-slate-600">{e.progress}% complete</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardStudent
