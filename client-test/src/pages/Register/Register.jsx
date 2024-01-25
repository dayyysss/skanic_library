import React from "react";
import { Link } from 'react-router-dom';
import Avatar from '../../assets/avatar.svg'
import ImgRegister from '../../assets/register.svg'

const Register = ({ title }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap- place-items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-4/5">
        <h3 className="mb-4 text-2xl font-bold text-purple-600 uppercase">{title}</h3>
        <img src={Avatar} className="w-32 h-32" />
        <div className="w-full">
          <form className="flex flex-col gap-2">
            <div className="w-full flex flex-col mt-4">
              <label name="email" className="mb-1 text-sm text-gray-400 font-semibold uppercase">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Introduce your email" 
                className="w-full border-2 border-purple-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-purple-400" 
                required 
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <label name="firstName" className="mb-1 text-sm text-gray-400 font-semibold uppercase">Firts Name</label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                placeholder="Introduce your First Name" 
                className="w-full border-2 border-purple-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-purple-400" 
                required 
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <label name="lastName" className="mb-1 text-sm text-gray-400 font-semibold uppercase">Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder="Introduce your Last Name" 
                className="w-full border-2 border-purple-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-purple-400" 
                required 
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <label name="email" className="mb-1 text-sm text-gray-400 font-semibold uppercase">Password</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Introduce your password" 
                className="w-full border-2 border-purple-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-purple-400" 
                required  
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <label name="email" className="mb-1 text-sm text-gray-400 font-semibold uppercase">Repetir Password</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Repeat your password" 
                className="w-full border-2 border-purple-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-purple-400" 
                required  
              />
            </div>
            <div className="w-full">
              <input 
                type="submit" 
                value="Register"
                className="w-full bg-purple-500 px-2 py-3 mt-4 text-white font-semibold tracking-widest uppercase rounded-lg hover:bg-purple-300"
              />
            </div>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Do you have an account?, <Link to="/" className="text-purple-500 hover:text-purple-700">login here</Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block md:w-full">
        <img src={ImgRegister} />
      </div>
    </div>
  )
}

export default Register