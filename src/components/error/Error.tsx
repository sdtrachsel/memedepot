import React from 'react'
import './Error.css'

const Error = (): JSX.Element => {
  return (
    <div>
      <h1 className="error-message">Something went wrong.</h1>
      <h2 className="error-message">URL not found.</h2>
    </div>
  )
}

export default Error