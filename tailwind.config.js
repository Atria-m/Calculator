/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        princess: '#fcd1e3',
        bluesky: '#87cefa',
        orchid: '#da70d6',    
        seafoam: '#93c5aa',    
        darkblue: '#1e3a8a',
        darkgray: '#2e2e2e',
        softblue: '#3b82f6',  
      },
    },
    screens: {
      mobile: "360px",
      desktop: "1000px",
    },
  },
  plugins: [],
  darkMode: "class",
};
