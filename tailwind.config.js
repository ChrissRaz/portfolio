/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: "url('./public/images/background.png')",
      // backgroundSize: {
      //   "cover": "cover"
      // }
    },
    colors: {
      'principal': '#cc1e30',
      "secondaire": "#FFFFFF"
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    // animation: {

    //   rotate: "rotate 2s linear infinite"

    // },
    // keyframes: {

    //   rotate: {

    //     from: {
    //       transform: "rotate(0deg)"
    //     },

    //     to: {
    //         transform: "rotate(360deg)"
    //     }

    //   }
    // }
  },
  plugins: [],
}
