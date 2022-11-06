import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CounterApp from './components/Counter'
import Error from './components/Error'
import NewHome from './components/NewHome'
import ReducerCounter from './Hooks/ReducerCounter'
import './style.css'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewHome />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='counter' element={<CounterApp />} />
            <Route path='reducer' element={<ReducerCounter />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}