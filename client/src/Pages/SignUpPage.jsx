import React, { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "react-hot-toast";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    email: "",
  });
  const { signup, isSigningUp } = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to server
    if (!formData.fullName || !formData.email || !formData.password) {
      return toast.error("All fields required");
    }
    signup(formData);
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] max-w-2xl transform transition-all duration-500 ">
          <div className="flex justify-center mb-6">
            <MdOutlineMessage className="text-green-600 font-bold text-4xl animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Join Us!
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 w-full"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 px-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                👤
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 px-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ✉️
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 px-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔒
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
