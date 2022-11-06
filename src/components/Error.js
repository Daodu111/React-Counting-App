import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <section>
      <h2>Error 404</h2>
      <p>Page not found</p>
      <Link to='/' className='about-btn'>
        Go Home
      </Link>
    </section>
  )
}
export default Error