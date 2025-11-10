import React from 'react'

const SectionTitle = ({ overline, title, subtitle, align = 'center' }) => {
  return (
    <div className={`container-base text-${align} max-w-3xl ${align==='center' ? 'mx-auto' : ''}`}>
      {overline && <div className="text-sky-600 font-semibold tracking-wide uppercase mb-2">{overline}</div>}
      {title && <h2 className="h2">{title}</h2>}
      {subtitle && <p className="lead mt-3">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
