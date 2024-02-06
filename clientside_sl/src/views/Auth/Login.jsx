// Update the import statements at the top
import React, { useState } from "react";
import Ilustration from "../../assets/ilus-logdaf.svg";
import { Link } from "react-router-dom";
import Api from "../../api/index.jsx"; // Update the import path

const Login = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log the request payload before making the API call
      console.log("Request Payload:", { email, password });

      const response = await Api.post("/api/login", {
        email,
        password,
      });

      // Handle successful login
      console.log(response.data);

      if (response.data.success) {
        // Redirect ke halaman dashboard admin
        window.location.href = "/dashboard-admin";
      }
    } catch (error) {
      // Handle login failure, e.g., show an error message
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 md:gap- place-items-center w-full min-h-screen">
      <div className="hidden md:block md:w-full">
        <img src={Ilustration} alt="Ilustration" />
      </div>
      <div className="flex flex-col justify-center items-center w-4/5">
        <h3 className="mb-4 text-2xl font-bold text-green-600 uppercase">
          Masuk Skanic Library
        </h3>
        <div className="w-full">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col mt-4">
              <label
                htmlFor="email"
                className="mb-1 text-sm text-green-400 font-semibold uppercase"
                style={{ alignSelf: "flex-start", marginLeft: "2px" }} // Menambahkan gaya CSS untuk memindahkan label ke kiri atas input
              >
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="Masukkan email anda"
                className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400"
                required
              />
            </div>

            <div className="w-full flex flex-col mt-4">
              <label
                htmlFor="password"
                className="mb-1 text-sm text-green-400 font-semibold uppercase"
                style={{ alignSelf: "flex-start", marginLeft: "2px" }} // Menambahkan gaya CSS untuk memindahkan label ke kiri atas input
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
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
            Tidak punya akun?{" "}
            <Link
              to="/register"
              className="text-green-500 hover:text-green-700"
            >
              daftar disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
