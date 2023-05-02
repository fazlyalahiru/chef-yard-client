/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#E7272D",
        
"secondary": "#222222",
        
"accent": "#baf49c",
        
"neutral": "#2F2631",
        
"base-100": "#FAF5FA",
        
"info": "#25A4DA",
        
"success": "#82E3C9",
        
"warning": "#C4930E",
        
"error": "#E92B37",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

