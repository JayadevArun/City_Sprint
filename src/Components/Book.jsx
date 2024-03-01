// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase'; // Import your Supabase instance
import { useUser } from '../UserContext';

const Book = () => {
  
  const { userEmail } = useUser();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate(); // Use the navigate function for redirection

  // Function to handle the search and fetch data
  const handleSearch = async () => {
    try {
      const { data, error } = await supabase
        .from('Routes')
        .select('*')
        .ilike('Start', `%${from}%`)
        .ilike('End', `%${to}%`);

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setSearchResults(data);
      }
    } catch (error) {
      console.error('Error during data fetching:', error.message);
    }

    
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(userEmail)
        // Fetch user details from the 'ProfileDetails' table based on the user's email
        const { data, error } = await supabase
          .from('ProfileDetails')
          .select('*')
          .eq('email', userEmail);

        if (error) {
          console.error('Error fetching user details:', error.message);
        } else {
          console.log('Fetched profile details of user');
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Error during user details fetching:', error.message);
      }
    };

    fetchUserDetails();
  }, [userEmail]);


// Function to handle the booking

const handleBookTicket = async (result) => {
  // Make sure 'result' has the 'id' property before using it

  try {
    if (result) {
      // You can pass relevant details to the Bill page
      const randomid = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
      console.log('randomID:', randomid);
      // Insert ticket details into the 'TicketDetails' table

      console.log('Type of DepartureTime:', typeof randomid);

      const { data, error } = await supabase
        .from('TicketDetails')
        .upsert([
          {
            tid: randomid,
            name: userProfile[0].name, // Replace with the actual attribute in your 'Routes' table
            age: userProfile[0].age,   // Replace with the actual attribute in your 'Routes' table
            busname: result.Busname,
            start: result.Start,
            end: result.End,
            price: result.Price,
            email: userEmail,
            // Add other relevant ticket details
          },
        ]);

      window.alert('Booked Successfully!')
      navigate('/Bookings');
    } else {
      console.error("Invalid result object:", result);
    }
  } catch (error) {
    console.error('Error during ticket details insertion:', error.message);
    window.alert('Ticket booking failed. Please try again.');
  }
};



  return (
    <div className='bg-sky-100 min-h-screen'>
      <h2 className="font-poppins text-sky-700 text-4xl font-bold mb-4 pt-10 pl-5">Book Tickets</h2>

      <div className="flex justify-center my-8">
        <div className="flex items-center space-x-4 bg-sky-300 p-4 border-4 border-sky-600 rounded-2xl">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-2 rounded-lg"
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded-2xl cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className='bg-sky-100 text-center flex justify-center p-10'>
          <div className="flex flex-col w-11/12 md:w-3/4 lg:w-2/3">
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
              <thead className="bg-sky-600 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Busname</th>
                  <th className="py-2 px-4 text-left">Start</th>
                  <th className="py-2 px-4 text-left">End</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Departure Time</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result) => (
                  <tr key={result.id} className="border-t border-sky-600">
                    <td className="py-2 px-4">{result.Busname}</td>
                    <td className="py-2 px-4">{result.Start}</td>
                    <td className="py-2 px-4">{result.End}</td>
                    <td className="py-2 px-4">{result.Price}</td>
                    <td className="py-2 px-4">{result.DepartureTime}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleBookTicket(result)}
                        className="bg-blue-500 text-white p-1 rounded-2xl cursor-pointer"
                      >
                        Book Ticket
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
};

export default Book;






