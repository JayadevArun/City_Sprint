import React from 'react'
import Book from './Book'
import About from './About'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
      
      <nav className="bg-blue-300 text-sky-900">
        <div className="container mx-auto flex text-center justify-center ">
          <Link to='/home'>
          <h1 className="text-2xl p-4 font-bold mx-10 cursor-pointer hover:bg-blue-200 hover:rounded-lg">Home</h1>
          </Link>
          <Link to='/profile'>
          <h1 className="text-2xl p-4 font-bold mx-10 cursor-pointer hover:bg-blue-200 hover:rounded-lg">Profile</h1>
          </Link>
          <Link to='/contact'>
          <h1 className="text-2xl p-4 font-bold mx-10 cursor-pointer hover:bg-blue-200 hover:rounded-lg">Contact</h1>
          </Link>
          <Link to='/Bookings'>
          <h1 className="text-2xl p-4 font-bold mx-10 cursor-pointer hover:bg-blue-200 hover:rounded-lg ">Bookings</h1>
          </Link>
          <Link to='/'>
          <h1 className="text-2xl p-4 font-bold mx-10 cursor-pointer hover:bg-blue-200 hover:rounded-lg ">Log Out</h1>
          </Link>
        </div>
      </nav>
      {/* Main Content 
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to our Bus Ticket Booking App</h2>
        <p className="text-gray-700 mb-8">
          Book your bus tickets hassle-free with our easy-to-use booking platform.
        </p>

         Your main content goes here 
      </div>*/}
      <Book />
      <About />
      <Footer/>
    </div>
    </div>
  )
}

export default Home