import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-[#A0E9FF] font-bold text-5xl py-10 px-10'>
        <div>
          <Link to='/home'>
            <img src='src\assets\bus.png' className='w-12 h-12 ml-8'/>
            <div className="font-poppin text-sky-900">
                CitySprint
            </div>
          </Link>
            
        </div>
    </div>
  )
}

export default NavBar