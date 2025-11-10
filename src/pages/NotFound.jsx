import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container-base py-24 text-center">
      <h1 className="h1">404</h1>
      <p className="lead mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn-primary mt-6 inline-flex">Go Home</Link>
    </div>
  )
}

export default NotFound
