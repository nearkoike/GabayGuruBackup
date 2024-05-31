/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    
    extend: {
     colors: {
        "blue" : "#058ED9",
        "darkblue": "#0940A3",
        "yellow" : "#FFBC1D",
        "light-blue-bg" : "#E9F7FF",
        "light-bg" : "#FCFCFC",
        "green" : "#3cb371",
        "red" : "#c30010",
      } 
    },
  },
  plugins: [require("daisyui")
            ],
  
  
  
}