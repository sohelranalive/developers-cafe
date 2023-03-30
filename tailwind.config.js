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
        
"primary": "#bfd850",
        
"secondary": "#9094e5",
        
"accent": "#aed65e",
        
"neutral": "#26242D",
        
"base-100": "#E3E5E8",
        
"info": "#38ADDC",
        
"success": "#18CDA9",
        
"warning": "#EC9522",
        
"error": "#FC6445",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

