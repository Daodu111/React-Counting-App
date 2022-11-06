import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <section className='component'>
      <h2>About</h2>
      <p>This counter app can be used for different counting reasons e.g to count during worship and the likes </p>
      <Link to='/' className='about-btn'>
        Back Home
      </Link>
    </section>
  )
}
export default About