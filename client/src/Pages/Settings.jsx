import React, { useState, useEffect } from "react";

// List of supported themes
const THEMES = ["light", "dark", "eye-protection"];
import { useThemeStore } from "../store/useThemeStore";
const SettingsPage = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const { theme, setTheme } = useThemeStore();
  // Load saved theme from localStorage on component mount

  // Apply the selected theme and save it to localStorage

  // Handle theme selection
  const handleThemeSelect = (theme) => {
    setTheme(theme);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="card bg-base-200 p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Change Theme</h2>

        {/* Theme Selection Buttons */}
        <div className="flex gap-4">
          {THEMES.map((theme) => (
            <button
              key={theme}
              className={`btn ${
                selectedTheme === theme ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => handleThemeSelect(theme)}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
