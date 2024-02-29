import React from 'react'

const About = () => {
  return (
    <div className="bg-sky-100 min-h-screen">
    

    {/* Main Content */}
    <div className="container mx-auto">
      <h2 className="font-poppins text-sky-700 text-4xl font-bold mb-4 pt-10 pl-5">About App</h2>
      <p className="font-poppins text-sky-700 my-12 flex justify-center text-center text-lg">
      Welcome to the Bus Ticket Booking App, a modern and user-friendly platform for hassle-free bus ticket reservations.<br /> Whether you're planning a daily commute or a cross-country adventure, our app has you covered.<br /> Read on to get started!
      <br />
      Features:
      <br />
      Effortless Booking: Easily search for buses, choose your route, and secure your seat in just a few clicks.
      <br />
      Flexible Scheduling: Find buses that match your schedule with a variety of departure times and locations.
      <br />
      Secure Transactions: Trust our secure payment system for a worry-free booking experience.
      <br />
      User-Friendly Interface: Navigate the app with ease, thanks to its intuitive design and straightforward user interface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        <div className="bg-blue-200 p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-105">
            <img src='src\assets\bus1.png' />
        </div>
        <div className="bg-blue-200 p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-105">
            <img src='src\assets\bus2.png' />
        </div>
        <div className="bg-blue-200 p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-105">
            <img src='src\assets\bus3.png' />
        </div>
      </div>
    </div>
    <div className='pb-10 text-center flex justify-center font-serif text-sky-700 text-lg'>
      ENJOY THE APP!
    </div>
  </div>
  )
}

export default About