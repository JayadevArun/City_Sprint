import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const Bill = ({ id, busname, start, end, price, depttime, email }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log('Current User Email:', email);
      try {
        // Fetch user profile details from the 'Profile' table based on the user's email
        const { data, error } = await supabase
          .from('Profile')
          .select('*')
          .eq('email', email);

        if (error) {
          console.error('Error fetching user profile:', error.message);
        } else {
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Error during user profile fetching:', error.message);
      }
    };

    fetchUserProfile();
  }, [email]);
  const handlePayNow = async () => {
    try {
      // Insert ticket details into the 'TicketDetails' table
      const randomid = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
      await supabase
        .from('TicketDetails')
        .insert([
          {
            tid: randomid,
            name: userProfile.name,
            age: userProfile.age,
            email: curruserEmail,
            busname: busname,
            start: start,
            end: end,
            price: price,
            depatureTime: depttime,
            // Add other relevant ticket details
          },
        ]);

      // Redirect to the home page
      window.alert('Payment successful!');
      // You can use the navigate function from your router library if you're using one
      window.location.href = '/home';
    } catch (error) {
      console.error('Error during payment:', error.message);
      window.alert('Payment failed. Please try again.');
    }
  };

  if (!userProfile) {
    return <div className='text-3xl text-black leading-relaxed text-center mx-auto mb-20 '>TICKET HAS BEEN BOOKED SUCCESSFULLY</div>;
  }

  return (
    <div className='bg-sky-100 text-center p-20'>
      <h1 className="text-3xl font-bold mb-4">Your Bill</h1>
      {/* Display user profile and ticket details in a styled way */}
      {/* ... (your styling code) */}
      <div className="text-left mx-auto max-w-2xl">
        <p>
          <strong>Name:</strong> {userProfile.name}
        </p>
        <p>
          <strong>Age:</strong> {userProfile.age}
        </p>
        <p>
          <strong>Email:</strong> {curruserEmail}
        </p>
        <p>
          <strong>Start Location:</strong> {start}
        </p>
        <p>
          <strong>End Location:</strong> {end}
        </p>
        <p>
          <strong>Total Price:</strong> {price}
        </p>
        {/* ... (other ticket details) */}
      </div>
      <button
        onClick={handlePayNow}
        className="bg-blue-500 text-white p-2 rounded-2xl cursor-pointer mt-4"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Bill;
