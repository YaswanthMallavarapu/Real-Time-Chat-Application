import React from "react";
import { format } from "date-fns";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
const Profile = () => {
  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const [selectImage, setSelectedImage] = useState(null);
  const handleForm = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        {/* Profile Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Profile
        </h1>

        {/* Profile Image Upload */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-green-500">
              {selectImage ? (
                <img
                  src={selectImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : authUser?.profilePic ? (
                <img
                  src={authUser.profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="w-full h-full text-gray-400" />
              )}
            </div>
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full cursor-pointer hover:bg-green-600 transition-all"
            >
              <FaCamera className="text-white text-lg" />
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                className="hidden"
                onChange={handleForm}
              />
            </label>
          </div>
        </div>
        <p className="m-3 text-center text-black-500">
          <span>
            {isUpdatingProfile
              ? "Uploading profile....."
              : "click on the camera to upload profile picture"}
          </span>
        </p>
        {/* Read-Only Inputs */}
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              readOnly
              value={authUser?.email}
              className="w-full p-3 px-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-100"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              ✉️
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              readOnly
              value={authUser?.fullName}
              className="w-full p-3 px-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-100"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              👤
            </span>
          </div>
        </div>

        {/* Account Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Account</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">User Since</span>
              <span className="text-gray-800 font-medium">
                {format(new Date(authUser?.createdAt), "dd MMM yyyy")}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Account Status</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
