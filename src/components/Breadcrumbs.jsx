import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ items = [] }) => {
  if (!items.length) return null
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-slate-600">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1
          if (isLast || !it.to) {
            return (
              <li key={idx} className="font-semibold text-slate-900">
                {it.label}
              </li>
            )
          }
          return (
            <li key={idx} className="flex items-center gap-2">
              <Link to={it.to} className="hover:text-emerald-700">{it.label}</Link>
              <span className="text-slate-400">/</span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
