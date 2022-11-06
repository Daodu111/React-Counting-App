import React from 'react'
/*import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/reducer'>ReducerCounter</Link>
    </nav>
  );
};

export default Navbar;*/


import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        About
      </NavLink>
      <NavLink
        to='/counter'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Counter
      </NavLink>
      <NavLink
        to='/reducer'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Reducer Counter
      </NavLink>
    </nav>
  );
};
export default Navbar;