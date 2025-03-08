import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUpPage";
import SettingsPage from "./Pages/Settings";
import ProfilePage from "./Pages/Profile";
import Home from "./Pages/HomePage";
import { useThemeStore } from "./store/useThemeStore";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";
function App() {
  const { checkAuth, authUser, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckingAuth && !authUser)
    return (
      <>
        <span className="loading loading-ring loading-xl"></span>
      </>
    );

  return (
    <div data-theme={theme} className="">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/signUp"
          element={!authUser ? <SignUpPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
