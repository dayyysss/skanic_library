import React from "react";
import Ilustration from '../../assets/ilus-logdaf.svg'
import { Link } from 'react-router-dom';

const Login = ({ title }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap- place-items-center w-full min-h-screen">
      <div className="hidden md:block md:w-full">
        <img src={Ilustration} />
      </div>
      <div className="flex flex-col justify-center items-center w-4/5">
        <h3 className="mb-4 text-2xl font-bold text-green-600 uppercase">Masuk ke akun Anda</h3>
        <div className="w-full">
          <form className="flex flex-col gap-2">
            <div className="w-full flex flex-col mt-4">
              <label name="email" className="mb-1 text-sm text-gray-400 font-semibold uppercase">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Masukkan email anda" 
                className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400" 
                required 
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <label name="email" className="mb-1 text-sm text-gray-400 font-semibold uppercase">Password</label>
              <input 
                type="password" 
                name="email" 
                id="email" 
                placeholder="Masukkan password anda" 
                className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400" 
                required  
              />
            </div>
            <div className="w-full">
              <input 
                type="submit" 
                value="Login"
                className="w-full bg-green-500 px-2 py-3 mt-4 text-white font-semibold tracking-widest uppercase rounded-lg hover:bg-green-300"
              />
            </div>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Don't have an account, <Link to="/register" className="text-green-500 hover:text-green-700">register here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login