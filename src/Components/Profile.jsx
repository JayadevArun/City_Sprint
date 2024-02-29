import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; // Import your Supabase instance
import { useUser } from '../UserContext';

const Profile = () => {
  const { userEmail } = useUser();
  const [userDetails, setUserDetails] = useState(null); // State to store user details

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(userEmail)
        // Fetch user details from the 'ProfileDetails' table based on the user's email
        const { data, error } = await supabase
          .from('ProfileDetails')
          .select('*')
          .eq('email', userEmail)
          .single();

        if (error) {
          console.error('Error fetching user details:', error.message);
        } else {
          setUserDetails(data);
        }
      } catch (error) {
        console.error('Error during user details fetching:', error.message);
      }
    };

    fetchUserDetails();
  }, [userEmail]);

  return (
    
    <div className='bg-sky-100 '>
      <div className="text-sky-800 container mx-auto py-10 h-screen bg-sky-100 text-center justify-center">
        <h1 className="text-3xl font-bold mb-4 p-5">{userDetails?.name}'s Profile Page</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className='mx-auto'>
            <h2 className="text-xl font-semibold pb-5 underline">Personal Information</h2>
            <p className='p-2'>
              <strong>Name:</strong> {userDetails?.name}
            </p>
            <p className='p-2'>
              <strong>Age:</strong> {userDetails?.age}
            </p>
            <p className='p-2'>
              <strong>City Of Residence:</strong> {userDetails?.city}
            </p>
            <p className='p-2'>
              <strong>Email:</strong> {userEmail}
            </p>
            
          </div>
          {/* You can add more sections for additional user information */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
