import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ilustration from "../../assets/ilus-logdaf.svg";
import axios from "axios";
import Api from "../../api/index";

const Register = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi password
    if (password !== confirmPassword) {
      console.error("Password and confirmation do not match");
      return;
    }

    try {
      console.log("Request Payload:", {
        name,
        email,
        password,
        confirmPassword,
      });

      const response = await Api.post("/api/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      console.log("Response:", response.data);

      // Handle successful registration, e.g., redirect to login page
      if (response.data.success) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div className="grid md:grid-cols-2 md:gap- place-items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-4/5">
        <h3 className="mb-4 text-2xl font-bold text-green-600 uppercase">
          Daftar Skanic Library
        </h3>
        <div className="w-full">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col mt-4">
  <label
    htmlFor="name"
    className="mb-1 text-sm text-green-400 font-semibold uppercase"
    style={{ alignSelf: "flex-start", marginLeft: "2px" }}
  >
    Username
  </label>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Masukkan username anda"
    className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400"
    required
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
</div>

<div className="w-full flex flex-col mt-4">
  <label
    htmlFor="email"
    className="mb-1 text-sm text-green-400 font-semibold uppercase"
    style={{ alignSelf: "flex-start", marginLeft: "2px" }}
  >
    Email
  </label>
  <input
    type="email"
    name="email"
    id="email"
    placeholder="Masukkan email anda"
    className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>

<div className="w-full flex flex-col mt-4">
  <label
    htmlFor="password"
    className="mb-1 text-sm text-green-400 font-semibold uppercase"
    style={{ alignSelf: "flex-start", marginLeft: "2px" }}
  >
    Password
  </label>
  <input
    type="password"
    name="password"
    id="password"
    placeholder="Masukkan password anda"
    className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400"
    required
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>

<div className="w-full flex flex-col mt-4">
  <label
    htmlFor="confirmPassword"
    className="mb-1 text-sm text-green-400 font-semibold uppercase"
    style={{ alignSelf: "flex-start", marginLeft: "2px" }}
  >
    Konfirmasi Password
  </label>
  <input
    type="password"
    name="confirmPassword"
    id="confirmPassword"
    placeholder="Konfirmasi password anda"
    className="w-full border-2 border-green-500 rounded-lg p-2 placeholder:text-sm focus-visible:outline-none focus:border-green-400"
    required
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
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
            Sudah punya akun?{" "}
            <Link to="/login" className="text-green-500 hover:text-green-700">
              Masuk
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block md:w-full">
        <img src={Ilustration} alt="Ilustration" />
      </div>
    </div>
  );
};

export default Register;
