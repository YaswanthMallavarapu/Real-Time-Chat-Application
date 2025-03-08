import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  daisyui: {
    themes: [
      "light", // Default light theme
      "dark", // Default dark theme
      {
        "eye-protection": {
          // Custom eye protection theme
          primary: "#4CAF50", // Green
          secondary: "#FFC107", // Amber
          accent: "#FF5252", // Red
          neutral: "#2A2A2A", // Dark gray
          "base-100": "#F0F0F0", // Light gray background
          "base-200": "#E0E0E0", // Slightly darker gray
          "base-300": "#CCCCCC", // Even darker gray
          "base-content": "#333333", // Dark text
        },
      },
    ],
  },
});
