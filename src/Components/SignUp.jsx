import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { supabase } from '../supabase.js';
import { useUser } from '../UserContext';

const SignUp = () => {
  const { updateUserEmail } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        window.alert("Passwords do not match");
        return;
      }

      // Add user details to the 'CstmrDetails' table
      const { data, error } = await supabase
        .from('CstmrDetails')
        .upsert([
          {
            email,
            username,
            password,
            phone_number,
          },
        ]);
        
      if (error) {
        console.log(error);
        window.alert("Error!");
      } else {
        updateUserEmail(email);
        navigate('/Profilecreate');
        window.alert("Sign up successful");
        
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
          <h1 className='text-sky-900 font-poppins text-[30px] font-bold mb-[30px]'>SignUp</h1>
          <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Username</h1>
          <input
            className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
            type="text"
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Phone Number</h1>
          <input
            className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
            type="text"
            placeholder='Enter phone number'
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Email</h1>
          <input
            className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
            type="email"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Password</h1>
          <input
            className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Confirm Password</h1>
          <input
            className='focus:ring-[1px] focus:ring-[#00ADB5] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
            type="password"
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Link to='/' className='text-sky-900 font-poppins text-[16px] cursor-pointer hover:underline hover:text-sky-600 my-[20px] w-[220px] mx-auto '>
            <p className='pt-3'>Already have an account ?</p>
          </Link>
          <button onClick={handleSignUp} className='font-poppins sm:text-[20px] text-[18px] color4bg text-sky-900 bg-sky-400 transition-all duration-100 ease-in-out hover:bg-sky-600 w-[110px] py-[10px] rounded-3xl my-[10px] hover:scale-105 '>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
