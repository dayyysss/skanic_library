import React from "react";
import { Link } from 'react-router-dom';
import Ilustration from '../../assets/ilus-logdaf.svg'

const Register = ({ title }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap- place-items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-4/5">
        <h3 className="mb-4 text-2xl font-bold text-green-600 uppercase">BUAT AKUN BARU</h3>
        <div className="w-full">
          <form className="flex flex-col gap-2">
            <div className="w-full flex flex-col mt-4">
              <label name="email" className="mb-1 text-sm text-green-400 font-semibold uppercase">Username</label>
              <input 
                type="username" 
                name="username" 
                id="username" 
                placeholder="Masukkan username anda" 
                className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400" 
                required 
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <label name="firstName" className="mb-1 text-sm text-green-400 font-semibold uppercase">Email</label>
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
              <label name="email" className="mb-1 text-sm text-green-400 font-semibold uppercase">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Introduce your password" 
                className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400" 
                required  
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <label name="email" className="mb-1 text-sm text-green-400 font-semibold uppercase">Konfirmasi Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Repeat your password" 
                className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400" 
                required  
              />
            </div>
            <div className="w-full">
              <input 
                type="submit" 
                value="Register"
                className="w-full bg-green-500 px-2 py-3 mt-4 text-white font-semibold tracking-widest uppercase rounded-lg hover:bg-green-300"
              />
            </div>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Sudah punya akun? <Link to="/" className="text-green-500 hover:text-green-700">Masuk</Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block md:w-full">
        <img src={Ilustration} />
      </div>
    </div>
  )
}

export default Register