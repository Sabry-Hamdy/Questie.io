/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main background colors
        background: {
          primary: "#0f172a", // slate-900 - main bg
          secondary: "#1e293b", // slate-800 - card bg
          tertiary: "#334155", // slate-700 - darker accents
        },

        // Text colors
        text: {
          primary: "#ffffff", // white
          secondary: "#94a3b8", // slate-400
          tertiary: "#64748b", // slate-500
        },

        // Brand/accent colors
        brand: {
          primary: "#f59e0b", // amber-500
          light: "#fcd34d", // amber-300
          dark: "#d97706", // amber-600
        },

        // Difficulty level colors
        difficulty: {
          novice: "#22c55e", // green-500
          apprentice: "#3b82f6", // blue-500
          expert: "#a855f7", // purple-500
          legendary: "#f59e0b", // amber-500
        },

        // Accent colors for various elements
        accent: {
          purple: "#a855f7", // purple-500
          blue: "#3b82f6", // blue-500
          green: "#22c55e", // green-500
          amber: "#f59e0b", // amber-500
        },

        // Border colors
        border: {
          primary: "#334155", // slate-700
          hover: "#f59e0b80", // amber-500/50
        },

        // Add these new gradient colors
        gradient: {
          amber: "#f59e0b33", // amber-500/20
          purple: "#a855f733", // purple-500/20
        },

        // Add overlay colors
        overlay: {
          primary: "#ffffff80", // white/50
        },

        // Add status colors
        status: {
          active: "#22c55e", // green-500
          warning: "#f59e0b", // amber-500
          error: "#ef4444", // red-500
        },
      },
    },
  },
  plugins: [],
};
