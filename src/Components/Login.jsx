import React, { useState } from 'react';
import SignUp from './SignUp';
import NavBar from './NavBar';
import { Link ,useNavigate } from 'react-router-dom';
import { supabase } from '../supabase.js';
import { useUser } from '../UserContext';

const Login = () => {
  const { updateUserEmail } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase
        .from('CstmrDetails') 
        .select('*')
        .eq('email', email)
        .eq('password', password);

      if (error) {
        window.alert("Invalid Server Error");
      }

      if (data.length === 1) {
        updateUserEmail(email);
        console.log(email)
        navigate('/Home');
      } else {
        window.alert("Invalid Credentials");
      }
    } catch (error) {
      window.alert("Server Error");
    }
  };

  return (
    <div className='bg-blue-300'>
      <div className='flex justify-center items-center h-[80vh]'>
        <div className='bg-[#BEFFF7] shadow-2xl border-[5px] border-[#39A7FF] rounded-3xl  sm:p-[40px] p-[20px] text-center sm:w-[500px] w-[290px]'>
          <h1 className='text-sky-900 font-poppins text-[30px] font-bold mb-[30px]'>Log In</h1>
          <h1 className='text-sky-900 font-poppins text-[20px] mt-[10px]'>Email</h1>
          <input
            className='focus:ring-[1px] focus:ring-[#39A7FF] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
            type="text"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className='text-sky-900 font-poppins text-[20px] mt-[20px] '>Password</h1>
          <input
            className='focus:ring-[1px] focus:ring-[#39A7FF] outline-none font-poppins text-center text-[18px] border-[1px] p-[10px] sm:w-[350px] w-[250px] rounded-3xl '
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <Link to='/signup' className='text-sky-900 font-poppins text-[16px] cursor-pointer hover:underline hover:text-sky-600 my-[20px] w-[90px] mx-auto '>
            <p className='pt-3'>New User ?</p>
          </Link>
            <button onClick={handleLogin} className='text-sky-900 font-poppins sm:text-[20px] text-[18px] bg-sky-400 transition-all duration-100 ease-in-out hover:scale-105 hover:bg-sky-600 w-[100px] py-[10px] rounded-3xl my-[10px]'>
              LogIn
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
