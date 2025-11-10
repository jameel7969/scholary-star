import React from 'react'
import { useParams, Link } from 'react-router-dom'
import shapeArrow from '../assets/page-header-shape-1.png'

const mock = {
  c1: { id: 'c1', title: 'Advanced UI/UX Design', image: '/src/assets/course-03.jpg', teacher: 'Alex Morgan', price: '$79' },
  c2: { id: 'c2', title: 'WordPress Development', image: '/src/assets/course-04.jpg', teacher: 'Sonia Ralph', price: '$59' },
  c3: { id: 'c3', title: 'Business Strategy 101', image: '/src/assets/course-05.jpg', teacher: 'Kevin Chen', price: '$49' },
}

const CourseDetail = () => {
  const { id } = useParams()
  const course = mock[id] || mock.c1

  const curriculum = [
    'Introduction and course overview',
    'Design foundations and research',
    'Wireframing and prototyping',
    'Visual design and design systems',
    'Usability testing and iteration',
  ]

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <div className="text-emerald-700 font-semibold">{course.teacher}</div>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">{course.title}</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Learn with hands-on projects and mentor feedback.</p>
        </div>
        <img src={shapeArrow} alt="shape" className="pointer-events-none absolute left-8 top-9 h-14 w-14" />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <img src={course.image} alt="" className="w-full h-64 sm:h-80 object-cover rounded-2xl" />
          <ul className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
            <li className="rounded-full bg-slate-100 px-3 py-1">Duration: 8 weeks</li>
            <li className="rounded-full bg-slate-100 px-3 py-1">Lessons: 32</li>
            <li className="rounded-full bg-slate-100 px-3 py-1">Level: Beginner</li>
            <li className="rounded-full bg-slate-100 px-3 py-1">Language: EN</li>
          </ul>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Course Overview</h3>
            <p className="text-slate-700">This course covers end-to-end skills with real-world examples and bite-sized lessons that fit your schedule. Get feedback from mentors and join peer discussions.</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Curriculum</h3>
            <ol className="divide-y divide-slate-200 rounded-xl border border-slate-200">
              {curriculum.map((c, i) => (
                <li key={i} className="flex items-center justify-between p-4">
                  <span className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">{i+1}</span>{c}</span>
                  <span className="text-slate-400">10 min</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Student Reviews</h3>
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="font-semibold">Jenny Wilson</div>
                <p className="text-slate-700">Practical and engaging. Highly recommended!</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="font-semibold">Robert Fox</div>
                <p className="text-slate-700">Great content and mentor support.</p>
              </div>
            </div>
          </div>
        </div>
        <aside>
          <div className="sticky top-24 rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">{course.price}</div>
            <div className="text-slate-600 mt-1">One-time payment</div>
            <Link to="/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500">Enroll Now</Link>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li>Lifetime access</li>
              <li>Certificate of completion</li>
              <li>Mentor Q&A support</li>
              <li>Downloadable resources</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default CourseDetail
