import React from "react";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import { setToken, getToken } from "../utils/global";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (user.username === "admin" && user.password === "123") {
      navigate("/admin");
    } else {
      const response = await userServices.getUsers();
      let flag = 1;
      response.data.forEach((element) => {
        if (
          element.username === user.username &&
          element.password === user.password
        ) {
          console.log(user.username, user.password);
          setToken(element.id);
          console.log(getToken());
          navigate("/home");
          flag = 0;
        }
      });
      if (flag === 1) {
        alert("Invaild Credentials");
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-8">
            <button
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              onClick={login}
            >
              Login
            </button>
          </div>

          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/register"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don't have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
