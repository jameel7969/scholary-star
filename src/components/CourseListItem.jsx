import React from 'react'
import { Link } from 'react-router-dom'

const CourseListItem = ({ id, title, image, teacher, price = '$0', students = 150 }) => {
  return (
    <article className="mt-4">
      <Link to={`/courses/${id}`}>
        <img src={image} alt={title} className="w-full rounded-md border" />
      </Link>
      <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
        <div className="truncate">By {teacher}</div>
        <div className="shrink-0">{students} Students</div>
      </div>
      <div className="flex items-center justify-between mt-1 text-[12px]">
        <div className="font-semibold truncate">{title}</div>
        <Link to={`/courses/${id}`} className="text-sky-600 font-semibold">View Details</Link>
      </div>
      <div className="text-[12px] text-slate-600">{price}</div>
    </article>
  )
}

export default CourseListItem
