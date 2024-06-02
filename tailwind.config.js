const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    theme:{
      fontFamily:{
        'select' : ['inter']
      },
      colors:{
        primary: '#1E40AF', // azul
        secondary: '#E11D48', // rojo
        accent: '#10B981', // verde
        neutral: '#3D4451', // gris
        base: '#F3F4F6', // gris claro
      }
    }
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
};
