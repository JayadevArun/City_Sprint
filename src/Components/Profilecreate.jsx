import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase.js';
import { useUser } from '../UserContext';

const profileCreate = () => {

    const { userEmail } = useUser();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    

    const handleSubmission = async () => {
        try {
            console.log('Submitting profile:', { email: userEmail, name, age, city });

            const { data, error } = await supabase
            .from('ProfileDetails')
            .upsert([
                {
                    email: userEmail, // Use the user's email from the context
                    name,
                    age,
                    city,
                },           
            ]);

          if (error) {
            console.log(error);
            window.alert("Error!");
          } else {
            navigate('/Home');
            
            // You can redirect the user to the login page or any other page after successful signup
          }
        } catch (error) {
          console.log(error)
          window.alert("Error during sign up:", error.message);
        }
    };



  return (
    <div className='bg-blue-300'>
  <div className='flex justify-center items-start h-[180vh] '>
    <div className='bg-[#BEFFF7] shadow-2xl border-[5px] border-[#39A7FF] rounded-3xl sm:p-[40px] p-[20px] sm:mt-[100px] mt-[50px] text-center sm:w-[600px] w-[290px]'>
      <h1 className='text-sky-900 font-poppins text-[30px] font-bold mb-[30px]'>Welcome To City Sprint App! Tell us more about yourself!</h1>
      <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Name</h1>
      <input
        className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
        type="text"
        placeholder='Enter Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Age</h1>
      <input
        className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
        type="text"
        placeholder='Enter Age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>City</h1>
      <input
        className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
        type="text"
        placeholder='Enter City Of Stay'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {/* Wrap the button in a div to place it on a new line */}
      <div>
        <button onClick={handleSubmission} className=' font-poppins sm:text-[20px] text-[18px] color4bg text-sky-900 bg-sky-400 transition-all duration-100 ease-in-out hover:bg-sky-600 w-[110px] py-[10px] rounded-3xl my-[10px] hover:scale-105 '>
          All Done!
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default profileCreate;