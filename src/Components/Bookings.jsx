import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { supabase } from '../supabase'; // Import your Supabase instance
import { useUser } from '../UserContext';


const Bookings = () => {
  const { userEmail } = useUser();
  const [bookingDetails, setbookingDetails] = useState([]); // State to store user details




  return (
    <div className='bg-sky-100 min-h-screen'>
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
      <div className="flex justify-center my-8">
      <div className="font-poppin text-sky-900">
      <h2 className="font-poppins text-sky-700 text-4xl font-bold mb-4 pt-10 pl-5">BOOKINGS</h2>
        </div>
      </div>


      {bookingDetails.length === 0 && (
      <div className="flex justify-center my-8">
        <div className="font-poppin text-sky-900">
          <p className="font-poppins text-sky-700 text-2xl font-bold mb-4 pt-10 pl-5">
            You have no bookings yet.
          </p>
        </div>
      </div>
      )}

      {bookingDetails.length > 0 && (
        <div className='bg-sky-100 text-center flex justify-center p-10'>
          <div className="flex flex-col w-11/12 md:w-3/4 lg:w-2/3">
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
              <thead className="bg-sky-600 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">TicketNo</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Age</th>
                  <th className="py-2 px-4 text-left">Busname</th>
                  <th className="py-2 px-4 text-left">Start</th>
                  <th className="py-2 px-4 text-left">Destination</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {bookingDetails.map((result) => (
                  <tr key={result.tid} className="border-t border-sky-600">
                    <td className="py-2 px-4">{result.tid}</td>
                    <td className="py-2 px-4">{result.name}</td>
                    <td className="py-2 px-4">{result.age}</td>
                    <td className="py-2 px-4">{result.busname}</td>
                    <td className="py-2 px-4">{result.start}</td>
                    <td className="py-2 px-4">{result.end}</td>
                    <td className="py-2 px-4">{result.price}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleCancelTicket(result.tid)}
                        className="bg-red-500 text-white p-1 rounded-2xl cursor-pointer"
                      >
                        Cancel Ticket
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;